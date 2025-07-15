import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const products = [
    {
      id: 1,
      name: 'Элегантное кольцо с бриллиантом',
      price: '185 000 ₽',
      category: 'rings',
      material: 'Белое золото 18к',
      size: '16-20',
      image: '/img/c5451dc7-1049-463c-892c-01986cf16c79.jpg',
      certificate: true
    },
    {
      id: 2,
      name: 'Золотое колье с подвеской',
      price: '95 000 ₽',
      category: 'necklaces',
      material: 'Желтое золото 14к',
      length: '45 см',
      image: '/img/2cc9db16-1339-4a36-b00b-5bf6f28b5067.jpg',
      certificate: true
    },
    {
      id: 3,
      name: 'Серьги с драгоценными камнями',
      price: '125 000 ₽',
      category: 'earrings',
      material: 'Розовое золото 18к',
      stones: 'Сапфиры',
      image: '/img/4a0eac8f-a4c8-4b92-b5d8-b2e4e230974b.jpg',
      certificate: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Все украшения', icon: 'Gem' },
    { id: 'rings', name: 'Кольца', icon: 'Circle' },
    { id: 'necklaces', name: 'Колье', icon: 'Heart' },
    { id: 'earrings', name: 'Серьги', icon: 'Headphones' },
    { id: 'bracelets', name: 'Браслеты', icon: 'Watch' }
  ];

  const services = [
    {
      title: 'Изменение размера',
      description: 'Профессиональная подгонка размера кольца',
      icon: 'Settings',
      price: 'от 2 500 ₽'
    },
    {
      title: 'Чистка и полировка',
      description: 'Восстановление первоначального блеска',
      icon: 'Sparkles',
      price: 'от 1 500 ₽'
    },
    {
      title: 'Гравировка',
      description: 'Персональная гравировка текста или символов',
      icon: 'Type',
      price: 'от 3 000 ₽'
    },
    {
      title: 'Оценка украшений',
      description: 'Профессиональная оценка для страхования',
      icon: 'FileCheck',
      price: 'от 5 000 ₽'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="font-elegant text-2xl font-bold gold-gradient bg-clip-text text-transparent">
                LUXE JEWELRY
              </h1>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-secondary transition-colors">Главная</a>
                <a href="#catalog" className="hover:text-secondary transition-colors">Каталог</a>
                <a href="#about" className="hover:text-secondary transition-colors">О нас</a>
                <a href="#services" className="hover:text-secondary transition-colors">Сервисы</a>
                <a href="#contact" className="hover:text-secondary transition-colors">Контакты</a>
                <a href="#jobs" className="hover:text-secondary transition-colors">Вакансии</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingBag" size={20} />
              </Button>
              <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Icon name="User" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-elegant text-center">
                      {authMode === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      {authMode === 'login' 
                        ? 'Войдите в свой аккаунт для доступа к личному кабинету'
                        : 'Создайте аккаунт для персональных рекомендаций'}
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as 'login' | 'register')}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Вход</TabsTrigger>
                      <TabsTrigger value="register">Регистрация</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="space-y-4">
                      <div className="space-y-2">
                        <Input placeholder="Email" type="email" />
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Пароль" type="password" />
                      </div>
                      <Button className="w-full gold-gradient">Войти</Button>
                    </TabsContent>
                    <TabsContent value="register" className="space-y-4">
                      <div className="space-y-2">
                        <Input placeholder="Имя" />
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Email" type="email" />
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Пароль" type="password" />
                      </div>
                      <Button className="w-full gold-gradient">Зарегистрироваться</Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-elegant text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Роскошь в каждой <span className="gold-gradient bg-clip-text text-transparent">детали</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Эксклюзивные украшения из драгоценных металлов и камней
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="gold-gradient text-black font-semibold hover-scale">
                <Icon name="Gem" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-white hover:bg-secondary hover:text-black">
                <Icon name="Play" size={20} className="mr-2" />
                Наша история
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Shield" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Сертификаты подлинности</h3>
              <p className="text-sm text-muted-foreground">Каждое украшение имеет сертификат качества</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Truck" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Бесплатная доставка</h3>
              <p className="text-sm text-muted-foreground">При покупке от 50 000 рублей</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Repeat" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Гарантия возврата</h3>
              <p className="text-sm text-muted-foreground">30 дней на возврат без вопросов</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Users" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Персональный сервис</h3>
              <p className="text-sm text-muted-foreground">Индивидуальный подход к каждому клиенту</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-elegant text-4xl font-bold mb-4">Каталог украшений</h2>
            <p className="text-xl text-muted-foreground">Эксклюзивная коллекция драгоценностей</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "gold-gradient text-black" : ""}
              >
                <Icon name={category.icon as any} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.certificate && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-black">
                      <Icon name="ShieldCheck" size={14} className="mr-1" />
                      Сертификат
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-elegant">{product.name}</CardTitle>
                  <CardDescription>{product.material}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <Button size="sm" className="gold-gradient text-black">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {product.size && <p>Размер: {product.size}</p>}
                    {product.length && <p>Длина: {product.length}</p>}
                    {product.stones && <p>Камни: {product.stones}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-elegant text-4xl font-bold mb-4">Наши сервисы</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг по уходу за украшениями</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 mx-auto">
                    <Icon name={service.icon as any} size={24} />
                  </div>
                  <CardTitle className="font-elegant">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-lg">{service.price}</p>
                  <Button className="w-full mt-4" variant="outline">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-elegant text-4xl font-bold mb-6">О нашем доме</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Уже более 50 лет мы создаем украшения, которые становятся семейными реликвиями. 
                Каждое изделие — это произведение искусства, созданное мастерами с многолетним опытом.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Award" size={20} className="text-secondary mr-3" />
                  <span>Более 50 лет на рынке</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={20} className="text-secondary mr-3" />
                  <span>Команда из 25+ мастеров</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Heart" size={20} className="text-secondary mr-3" />
                  <span>10000+ довольных клиентов</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shimmer">
                <img 
                  src="https://v3.fal.media/files/elephant/DeMOLjQ83Sls4grdplt0c_output.png" 
                  alt="Дизайн-система ювелирного магазина"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-elegant text-4xl font-bold mb-4">Присоединяйтесь к нашей команде</h2>
            <p className="text-xl text-muted-foreground">Открытые вакансии в LUXE JEWELRY</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ювелир-дизайнер</CardTitle>
                <CardDescription>Полная занятость • Москва</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Создание эксклюзивных украшений, работа с драгоценными металлами и камнями.</p>
                <Button variant="outline" className="w-full">Откликнуться</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Консультант по продажам</CardTitle>
                <CardDescription>Полная занятость • Санкт-Петербург</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Консультирование клиентов, помощь в выборе украшений, работа с VIP-клиентами.</p>
                <Button variant="outline" className="w-full">Откликнуться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-elegant text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={20} className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Тверская, 15<br />Торговый центр "Роскошь", 2 этаж</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={20} className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={20} className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@luxejewelry.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={20} className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Часы работы</h3>
                  <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-elegant">Написать нам</CardTitle>
                <CardDescription>Оставьте сообщение и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" type="email" />
                <textarea 
                  className="w-full p-3 border border-input rounded-md resize-none h-24" 
                  placeholder="Ваше сообщение..."
                />
                <Button className="w-full gold-gradient text-black">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-elegant text-xl font-bold gold-gradient bg-clip-text text-transparent mb-4">
                LUXE JEWELRY
              </h3>
              <p className="text-gray-400">
                Эксклюзивные украшения для особых моментов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition-colors">Кольца</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Серьги</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Колье</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Браслеты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервисы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition-colors">Изменение размера</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Чистка</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Гравировка</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Оценка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-secondary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-secondary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-secondary">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LUXE JEWELRY. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}