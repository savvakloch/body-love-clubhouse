import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Месячная подписка",
      price: 2990,
      period: "месяц",
      description: "Попробуйте клуб и оцените результаты",
      features: [
        "Доступ ко всем Zoom-встречам",
        "Telegram-чат сообщества",
        "Базовые PDF-гайды",
        "Участие в розыгрышах"
      ],
      popular: false
    },
    {
      name: "Квартальная подписка",
      price: 7990,
      period: "3 месяца",
      originalPrice: 8970,
      description: "Оптимальный выбор для видимых результатов",
      features: [
        "Всё из месячной подписки",
        "Марафон «21 день любви к телу»",
        "МАК-практика с психологом",
        "Персональные консультации",
        "Расширенные PDF-материалы",
        "Лекции по стилю"
      ],
      popular: true
    },
    {
      name: "Годовая подписка",
      price: 24990,
      period: "год",
      originalPrice: 35880,
      description: "Максимальная трансформация и поддержка",
      features: [
        "Всё из квартальной подписки",
        "Индивидуальный план развития",
        "Ежемесячные 1:1 сессии",
        "VIP-статус в сообществе",
        "Эксклюзивные материалы",
        "Приоритетная поддержка",
        "Бонусные мастер-классы"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Выберите свой <span className="text-primary">тариф</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Инвестиция в себя, которая изменит вашу жизнь
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-gradient-hero text-white shadow-soft scale-105' 
                  : 'bg-white shadow-card hover:shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Популярный выбор
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-2">
                  {plan.originalPrice && (
                    <span className={`text-lg line-through ${plan.popular ? 'text-white/60' : 'text-muted-foreground'}`}>
                      {plan.originalPrice}₽
                    </span>
                  )}
                </div>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}₽
                  </span>
                  <span className={`${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                    <span className={`${plan.popular ? 'text-white' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.popular ? "soft" : "hero"}
                size="lg"
              >
                Оформить подписку
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 p-6 bg-peach-light rounded-2xl">
          <p className="text-foreground font-medium">
            💫 Первые 7 дней — бесплатно! Отмена в любое время без объяснений
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;