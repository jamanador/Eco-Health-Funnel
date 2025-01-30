const brandLogos = [
  "/icons/icon-menshealth.svg",
  "/icons/icon-forbes.svg",
  "/icons/icon-business-insider.svg",
  "/icons/icon-muscle-and-fitness.svg",
  "/icons/icon-mens-journal.svg",
] as const;
export function AsSeenIn() {
  return (
    <section className="py-20">
      <h3 className="flex items-center justify-center gap-x-6 text-center text-xl font-bold text-gray-400 before:block before:h-0.5 before:flex-1 before:bg-gray-400 after:block after:h-0.5 after:flex-1 after:bg-gray-400">
        AS SEEN IN
      </h3>
      <ul className="flex gap-x-4 py-6">
        {brandLogos.map((logo) => (
          <li key={logo} className="flex-1">
            <img src={logo} alt="brand logo" />
          </li>
        ))}
      </ul>
    </section>
  );
}
