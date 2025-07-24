import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import floralBackground from '@/assets/floral-background.jpg';

const Index = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpenCard = () => {
    setIsCardOpen(true);
  };

  const wishMessages = [
    {
      icon: "✨",
      message: "You'll shine wherever you go"
    },
    {
      icon: "🏠",
      message: "You made remote work feel less remote"
    },
    {
      icon: "☕",
      message: "Wishing you joy, peace, and great coffee"
    },
    {
      icon: "💫",
      message: "This isn't goodbye, it's 'see you later'"
    }
  ];

  if (!isCardOpen) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center bg-gradient-dreamy relative overflow-hidden"
        style={{
          backgroundImage: `url(${floralBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Gentle overlay */}
        <div className="absolute inset-0 bg-gradient-soft opacity-80"></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="fade-in-up">
            <h1 className="font-handwritten text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
              A Little Something
            </h1>
            <p className="font-handwritten text-4xl md:text-5xl text-secondary mb-8">
              Just for You 💌
            </p>
            <p className="font-elegant text-lg md:text-xl text-muted-foreground mb-12 max-w-md mx-auto">
              From my screen to yours, with all the love in the world
            </p>
          </div>
          
          <div className="fade-in-up-delay-1">
            <Button 
              onClick={handleOpenCard}
              size="lg"
              className="font-body text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm transition-bounce hover:scale-105 rounded-full"
            >
              Click to Open 💝
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-soft relative overflow-hidden"
      style={{
        backgroundImage: `url(${floralBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Gentle overlay */}
      <div className="absolute inset-0 bg-gradient-soft opacity-90"></div>
      
      <div className="relative z-10 card-flip-enter">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary mb-4">
              With Love and Gratitude 💛
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full opacity-60"></div>
          </div>

          {/* Personal Message */}
          <Card className="p-8 md:p-12 mb-16 shadow-gentle bg-card/95 backdrop-blur-sm border-0 fade-in-up-delay-1">
            <div className="text-center">
              <p className="font-elegant text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                Hi dear,
              </p>
              
              <div className="font-body text-lg leading-relaxed text-foreground space-y-4 max-w-3xl mx-auto">
                <p>
                  Even though we've never shared the same physical space, your presence has been felt so deeply across our virtual one. Your kindness radiates through every message, your positivity brightens even the cloudiest of Monday mornings, and your incredible work ethic inspires everyone around you.
                </p>
                
                <p>
                  You have this beautiful way of making remote work feel warm and connected. Through screen shares and video calls, you've shared not just your expertise but your genuine, caring spirit. You've turned digital interactions into meaningful relationships, and that's truly a gift.
                </p>
                
                <p>
                  As you embark on this new chapter, please know that you've left an indelible mark on all of us. Your sweetness, your dedication, and your lovely heart have made our virtual workspace a brighter place. Thank you for being exactly who you are.
                </p>
              </div>
              
              <p className="font-handwritten text-2xl text-primary mt-8">
                With all my love and best wishes ❤️
              </p>
            </div>
          </Card>

          {/* Wishes Section */}
          <div className="mb-16 fade-in-up-delay-2">
            <h2 className="font-handwritten text-4xl md:text-5xl text-secondary text-center mb-12">
              Wishes for Your Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {wishMessages.map((wish, index) => (
                <Card 
                  key={index}
                  className={`p-6 text-center shadow-warm bg-card/95 backdrop-blur-sm border-0 transition-gentle hover:scale-105 float-gentle`}
                >
                  <div className="text-4xl mb-4">{wish.icon}</div>
                  <p className="font-body text-lg text-foreground">{wish.message}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Final Note */}
          <Card className="p-8 md:p-12 shadow-gentle bg-primary/10 backdrop-blur-sm border-2 border-primary/20 fade-in-up-delay-3">
            <div className="text-center">
              <p className="font-elegant text-xl md:text-2xl text-primary leading-relaxed max-w-2xl mx-auto">
                "From my screen to yours — thank you for being such a bright light in this virtual space."
              </p>
              
              <div className="mt-8 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-accent rounded-full opacity-60"></div>
              </div>
              
              <p className="font-handwritten text-2xl text-primary mt-6">
                Forever grateful,<br />
                Your colleague & friend 💕
              </p>
            </div>
          </Card>
          
          {/* Decorative Footer */}
          <div className="text-center mt-16 fade-in-up-delay-3">
            <div className="flex justify-center items-center space-x-4 text-3xl opacity-60">
              <span>🌸</span>
              <span>💫</span>
              <span>🌈</span>
              <span>✨</span>
              <span>🌸</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;