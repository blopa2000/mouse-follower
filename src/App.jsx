import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX + "px", y: clientY + "px" });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      //limbia subscripciones o eventos
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#rgba(0,0,0,0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x},${position.y})`,
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
