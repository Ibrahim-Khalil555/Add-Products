import { Button, Layout } from "antd";

type NavbarProps = {
  onAddClick: () => void;
};

export default function Navbar({ onAddClick }: NavbarProps) {
  return (
    <Layout.Header
      style={{
        display: "inline-flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#001529",
        padding: "0 16px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        MyStore
      </div>

      <Button
        type="primary"
        onClick={onAddClick}
        className="no-active-style"
        style={{ flexShrink: 0 }}
      >
        Add Product
      </Button>
    </Layout.Header>
  );
}
