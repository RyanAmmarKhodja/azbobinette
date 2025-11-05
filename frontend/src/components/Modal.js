export default function Modal({ show, title, children, onClose }) {
  if (!show) return null;

  return (
    <div
      className="modal-backdrop"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1050,
      }}
    >
      <div
        className="bg-white p-4 rounded shadow"
        style={{ minWidth: "600px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>{title}</h5>
          <button
            type="button"
            className="btn-close "
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
