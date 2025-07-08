import { Heart, Users, TrendingUp } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Принятие тела",
      description: "Мы учимся любить своё тело таким, какое оно есть, и работаем с ним, а не против него"
    },
    {
      icon: Users,
      title: "Поддержка без давления",
      description: "Безопасное пространство, где каждая может поделиться своими переживаниями без страха осуждения"
    },
    {
      icon: TrendingUp,
      title: "Мягкие трансформации",
      description: "Работаем с привычками и самооценкой постепенно, формируя устойчивые изменения"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наши <span className="text-primary">ценности</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Три ключевых принципа, на которых строится наше сообщество
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-gradient-card backdrop-blur-sm shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;