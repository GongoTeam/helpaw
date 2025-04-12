import { FaDog, FaPhoneAlt, FaHome } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaDog size={40} />,
      title: "Вибери тварину",
      description:
        "Знайдіть того, хто чекає саме на вас — перегляньте анкети собак і котів, готових до всиновлення.",
    },
    {
      icon: <FaPhoneAlt size={40} />,
      title: "Зв'яжись з притулком",
      description:
        "Натисніть “Хочу всиновити” — і з вами зв'яжеться представник притулку, щоб відповісти на всі питання.",
    },
    {
      icon: <FaHome size={40} />,
      title: "Забери додому",
      description:
        "Прийдіть знайомитись, і якщо все взаємно — подаруйте тваринці нове життя та справжню родину.",
    },
  ];

  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8 flex justify-center items-center gap-2">
        ЯК ЦЕ ПРАЦЮЄ?
        <span role="img" aria-label="paw">
          🐾
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-green-100 p-6 rounded-lg max-w-sm text-center"
          >
            <div className="text-black mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
