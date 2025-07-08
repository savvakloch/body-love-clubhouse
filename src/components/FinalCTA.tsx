import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Присоединяйся сейчас и начни{" "}
          <span className="block mt-2">любить своё тело!</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Твоя трансформация начинается с первого шага. 
          Сделай его сегодня в окружении поддерживающих женщин.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="soft" size="lg" className="text-lg px-8 py-6 group">
            Хочу в клуб
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-sm">Счастливых участниц</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-sm">Довольны результатами</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2 года</div>
            <div className="text-sm">Успешной работы</div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
          <p className="text-white font-medium">
            ✨ Специальное предложение: первые 7 дней абсолютно бесплатно!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;