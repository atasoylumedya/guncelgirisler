export default function Card({ title, children, buttonSet = null }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 mb-4`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {buttonSet && <div className="mr-4">{buttonSet()}</div>}
      </div>
      <hr className="mb-4" />
      <div>{children}</div>
    </div>
  );
}
