
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tag, Clock, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RaffleCard = ({ title, description, imageText, tags, endDate, participants }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col bg-card">
    <div className="bg-muted aspect-video flex items-center justify-center">
      <span className="text-muted-foreground text-2xl font-semibold">{imageText || "Sorteo"}</span>
    </div>
    <CardHeader>
      <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      <CardDescription className="text-sm h-10 overflow-hidden text-muted-foreground">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center text-xs text-muted-foreground mb-1">
        <Clock size={14} className="mr-1.5" />
        <span>Termina: {endDate}</span>
      </div>
      <div className="flex items-center text-xs text-muted-foreground">
        <Users size={14} className="mr-1.5" />
        <span>{participants} participantes</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full cta-gradient hover:opacity-90" asChild>
        <Link to={`/sorteos/${title.toLowerCase().replace(/\s+/g, "-")}`}>Ver Sorteo</Link>
      </Button>
    </CardFooter>
  </Card>
);

const RafflesPage = () => {
  const raffles = [
    { id: 1, title: "Sorteo Súper Tech", description: "Gana lo último en gadgets tecnológicos, desde smartphones hasta consolas.", imageText: "Gadgets", tags: ["Tecnología", "Electrónicos"], endDate: "2025-06-15", participants: 1250 },
    { id: 2, title: "Viaje de Ensueño", description: "Un viaje con todo incluido a un destino paradisíaco. ¡Tu aventura te espera!", imageText: "Viaje", tags: ["Viajes", "Vacaciones"], endDate: "2025-07-01", participants: 3420 },
    { id: 3, title: "Kit Gamer Completo", description: "Equipa tu setup con un monitor, teclado, mouse y auriculares pro.", imageText: "Gaming", tags: ["Gaming", "PC"], endDate: "2025-05-30", participants: 890 },
    { id: 4, title: "Cena Gourmet para Dos", description: "Disfruta de una experiencia culinaria inolvidable en un restaurante de lujo.", imageText: "Cena", tags: ["Comida", "Experiencia"], endDate: "2025-06-10", participants: 450 },
    { id: 5, title: "Vale de Regalo Moda", description: "Renueva tu armario con un generoso vale de regalo para tu tienda favorita.", imageText: "Moda", tags: ["Moda", "Compras"], endDate: "2025-06-20", participants: 680 },
    { id: 6, title: "Libros Best Sellers", description: "Una colección de los libros más vendidos del año para los amantes de la lectura.", imageText: "Libros", tags: ["Cultura", "Lectura"], endDate: "2025-07-10", participants: 320 },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-foreground">Sorteos Activos</h1>
        <p className="text-lg text-muted-foreground">Encuentra tu próximo premio. ¡Mucha suerte!</p>
      </div>

      <div className="mb-8 p-6 bg-card border border-border/60 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-2">
            <label htmlFor="search-raffle" className="block text-sm font-medium text-foreground mb-1">Buscar sorteo</label>
            <div className="relative">
              <Input type="text" id="search-raffle" placeholder="Ej: Viaje, Tecnología..." className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-foreground mb-1">Ordenar por</label>
            <Select>
              <SelectTrigger id="sort-by" className="bg-input text-foreground">
                <SelectValue placeholder="Más Recientes" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="recent">Más Recientes</SelectItem>
                <SelectItem value="ending_soon">Terminan Pronto</SelectItem>
                <SelectItem value="most_participants">Más Participantes</SelectItem>
                <SelectItem value="fewest_participants">Menos Participantes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {raffles.map((raffle) => (
          <RaffleCard key={raffle.id} {...raffle} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">Cargar más sorteos</Button>
      </div>
    </div>
  );
};

export default RafflesPage;
