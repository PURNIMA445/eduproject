export default function Layout({ children }) {
    return (
      <div className="flex justify-center h-full items-center w-full container mx-auto min-h-screen">
        {children}
      </div>
    );
  }
  