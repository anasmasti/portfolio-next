export default function Copyright() {
  let today = new Date();
  let currentYear = today.getFullYear();

  return (
    <section className="flex justify-center p-5">
      <p className="text-gray-600">Copyright {currentYear} &copy;</p>
    </section>
  );
}
