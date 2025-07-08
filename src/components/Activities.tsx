import { Video, Calendar, Heart, MessageCircle, FileText, Sparkles, Gift } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Video,
      title: "Zoom-встречи",
      description: "Еженедельные онлайн-встречи с экспертами и участницами для обмена опытом"
    },
    {
      icon: Calendar,
      title: "Марафон «21 день любви к телу»",
      description: "Интенсивная программа трансформации отношения к себе за 3 недели"
    },
    {
      icon: Heart,
      title: "МАК-практика",
      description: "Метафорические карты для глубокой работы с подсознанием и установками"
    },
    {
      icon: MessageCircle,
      title: "Telegram-чат",
      description: "Закрытое сообщество для ежедневного общения и взаимной поддержки"
    },
    {
      icon: FileText,
      title: "PDF-гайды",
      description: "Практические материалы по питанию, движению и работе с собой"
    },
    {
      icon: Sparkles,
      title: "Лекции по стилю",
      description: "Как подчеркнуть свою красоту и чувствовать себя уверенно в любом образе"
    },
    {
      icon: Gift,
      title: "Розыгрыши",
      description: "Регулярные подарки и бонусы для активных участниц сообщества"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Что вас <span className="text-primary">ожидает</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Разнообразные активности и форматы для комплексной работы над собой
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {activity.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
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

export default Activities;