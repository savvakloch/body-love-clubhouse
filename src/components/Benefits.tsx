import { Users, Target, Star } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Сообщество поддержки",
      description: "Окружение единомышленниц, которые понимают ваш путь и готовы поддержать в любой момент",
      gradient: "from-peach to-pink"
    },
    {
      icon: Target,
      title: "Индивидуальный контроль прогресса",
      description: "Персональное сопровождение и отслеживание ваших достижений на пути к целям",
      gradient: "from-pink to-mint"
    },
    {
      icon: Star,
      title: "Экспертные практики",
      description: "Проверенные методики и лайфхаки от специалистов в области психологии и здоровья",
      gradient: "from-mint to-peach"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Преимущества <span className="text-primary">участия</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Что делает наш клуб особенным и эффективным
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl p-8 bg-white shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-3"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-peach/20 to-pink/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;