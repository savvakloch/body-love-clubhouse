import { Star } from "lucide-react";
import testimonialsImage from "@/assets/testimonials.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна К.",
      age: 32,
      text: "За 3 месяца в клубе я не только похудела на 8 кг, но и впервые за долгое время полюбила себя. Здесь никто не заставляет голодать или изнурять себя тренировками!",
      changes: "Вес -8 кг, уверенность +100%"
    },
    {
      name: "Мария Д.",
      age: 28,
      text: "Сообщество девочек - это то, чего мне так не хватало! Поддержка 24/7, никого осуждения, только понимание и помощь. Я стала гораздо энергичнее и счастливее.",
      changes: "Энергия на максимум, стресс минимум"
    },
    {
      name: "Елена В.",
      age: 39,
      text: "После двух детей думала, что красивое тело - это не для меня. Но здесь я поняла, что красота - это про здоровье и любовь к себе. Спасибо за новую жизнь!",
      changes: "Вес -12 кг, самооценка в небеса"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={testimonialsImage} 
          alt="Счастливые участницы" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Истории наших <span className="text-primary">участниц</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные результаты от реальных женщин
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-white/90 backdrop-blur-sm shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age} лет
                    </p>
                  </div>
                </div>
                
                <div className="mt-3 p-3 bg-peach-light rounded-lg">
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.changes}
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

export default Testimonials;