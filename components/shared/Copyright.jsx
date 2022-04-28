export default function Copyright() {
  let today = new Date();
  let currentYear = today.getFullYear();

  return (
    <p className="text-gray-600 flex justify-center p-5">
      Copyright {currentYear} &copy;
    </p>
  );
}
