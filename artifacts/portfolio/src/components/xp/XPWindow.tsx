import { useEffect, useRef, type ReactNode } from "react";

const TITLE_ACTIVE =
  "linear-gradient(180deg,#4e9de1 0%,#4e9de1 3%,#2c6fce 8%,#1a57bf 40%,#1248b0 60%,#0e3ea8 90%,#0a3494 100%)";
const TITLE_INACTIVE =
  "linear-gradient(180deg,#9db8d2 0%,#9db8d2 3%,#7592aa 8%,#6a849c 50%,#607890 100%)";

export interface XPWindowProps {
  id: string;
  title: string;
  icon?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
  active: boolean;
  mobile?: boolean;
  taskbarH?: number;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  children: ReactNode;
}

export function XPWindow({
  title, icon, x, y, width, height, zIndex,
  minimized, maximized, active, mobile = false, taskbarH = 38,
  onFocus, onMove, onClose, onMinimize, onToggleMaximize,
  children,
}: XPWindowProps) {
  const drag = useRef<{ sx: number; sy: number; wx: number; wy: number } | null>(null);
  const onMoveRef = useRef(onMove);
  useEffect(() => { onMoveRef.current = onMove; }, [onMove]);

  useEffect(() => {
    if (mobile) return;
    const onMouseMove = (e: MouseEvent) => {
      if (!drag.current) return;
      onMoveRef.current(
        drag.current.wx + (e.clientX - drag.current.sx),
        Math.max(0, drag.current.wy + (e.clientY - drag.current.sy)),
      );
    };
    const onMouseUp = () => { drag.current = null; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mobile]);

  if (minimized) return null;

  const isFullscreen = maximized || mobile;
  const outer: React.CSSProperties = isFullscreen
    ? { position: "fixed", top: 0, left: 0, right: 0, bottom: taskbarH, zIndex }
    : { position: "absolute", left: x, top: y, width, height, zIndex };

  const borderColor = active ? "#0a3494" : "#7592aa";
  const btnSize = mobile ? 32 : 21;
  const btnFontSize = mobile ? 16 : 12;

  const WIN_BTN: React.CSSProperties = {
    width: btnSize, height: btnSize, border: "1px solid rgba(0,0,0,0.4)", borderRadius: 3,
    color: "white", fontSize: btnFontSize, cursor: "default",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: "bold", fontFamily: "Tahoma,sans-serif",
    boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.4)",
  };

  return (
    <div style={outer} onMouseDown={onFocus}>
      <div style={{
        border: `3px solid ${borderColor}`,
        borderRadius: isFullscreen ? 0 : "8px 8px 4px 4px",
        boxShadow: active ? "4px 4px 16px rgba(0,0,0,0.5)" : "2px 2px 8px rgba(0,0,0,0.25)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "white",
      }}>
        {/* Title bar */}
        <div
          style={{
            background: active ? TITLE_ACTIVE : TITLE_INACTIVE,
            padding: mobile ? "6px 6px" : "3px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: mobile ? 44 : 28,
            cursor: isFullscreen ? "default" : "move",
            flexShrink: 0,
            userSelect: "none",
          }}
          onMouseDown={(e) => {
            if (isFullscreen || mobile) return;
            e.preventDefault();
            drag.current = { sx: e.clientX, sy: e.clientY, wx: x, wy: y };
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6, overflow: "hidden", minWidth: 0 }}>
            {icon && <span style={{ fontSize: mobile ? 20 : 14, flexShrink: 0 }}>{icon}</span>}
            <span style={{
              color: "white", fontSize: mobile ? 15 : 12, fontWeight: "bold",
              fontFamily: "Tahoma,sans-serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>{title}</span>
          </div>
          <div style={{ display: "flex", gap: 4, flexShrink: 0, marginLeft: 8 }}
            onMouseDown={e => e.stopPropagation()}>
            {!mobile && (
              <button onClick={e => { e.stopPropagation(); onMinimize(); }}
                style={{ ...WIN_BTN, background: "linear-gradient(180deg,#4a9de8 0%,#2870cc 100%)", fontSize: 14 }}>─</button>
            )}
            {!mobile && (
              <button onClick={e => { e.stopPropagation(); onToggleMaximize(); }}
                style={{ ...WIN_BTN, background: "linear-gradient(180deg,#4a9de8 0%,#2870cc 100%)" }}>□</button>
            )}
            <button onClick={e => { e.stopPropagation(); onClose(); }}
              style={{ ...WIN_BTN, background: "linear-gradient(180deg,#d84040 0%,#b02020 100%)", fontSize: mobile ? 18 : 13 }}>✕</button>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
