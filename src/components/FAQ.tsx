import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Как проходит процесс вступления в клуб?",
      answer: "После оплаты вы получите приглашение в Telegram-чат и ссылки на все материалы. Первая Zoom-встреча состоится уже через несколько дней, где вы познакомитесь с участницами и получите план действий."
    },
    {
      question: "В каком формате проводятся встречи?",
      answer: "Основные встречи проходят в Zoom каждую неделю по вечерам. Также есть ежедневное общение в Telegram-чате, МАК-практики в мини-группах и индивидуальные консультации по запросу."
    },
    {
      question: "Сколько стоит участие и что входит в стоимость?",
      answer: "Месячная подписка — 2990₽, квартальная — 7990₽ (экономия 980₽), годовая — 24990₽ (экономия 10890₽). В стоимость входят все встречи, материалы, доступ к чату и персональная поддержка."
    },
    {
      question: "Можно ли отменить подписку в любое время?",
      answer: "Да, вы можете отменить подписку в любой момент без объяснения причин. Доступ к материалам сохранится до окончания оплаченного периода."
    },
    {
      question: "Подходит ли клуб новичкам в вопросах похудения?",
      answer: "Абсолютно! Наш подход основан на мягких трансформациях и подходит женщинам с любым уровнем опыта. Мы не используем жёсткие диеты или изнуряющие тренировки."
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на самые популярные вопросы о клубе
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;