import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="Женщины в поддерживающей атмосфере" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Станьте частью клуба, в котором{" "}
            <span className="text-primary">каждый достигает целей</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Для тех, кто только начал или продолжает свой путь любви к телу. 
            Мягкие трансформации без жёстких диет и осуждения.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Присоединиться к клубу
            </Button>
            <Button variant="soft" size="lg" className="text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-peach/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-mint/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-pink/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;