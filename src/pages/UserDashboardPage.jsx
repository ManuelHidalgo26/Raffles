
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ticket, Edit3, Settings, LogOut, Gift, Star } from "lucide-react";

const UserDashboardPage = () => {
  const user = {
    name: "Usuario Ejemplo",
    email: "usuario@ejemplo.com",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60",
    initials: "UE",
  };

  const participatedRaffles = [
    { id: 1, title: "Sorteo Súper Tech", status: "Activo", prize: "iPhone 15 Pro" },
    { id: 2, title: "Viaje de Ensueño", status: "Finalizado", prize: "Viaje a Cancún", won: true },
    { id: 3, title: "Kit Gamer Completo", status: "Activo", prize: "Setup Gamer" },
  ];

  const organizedRaffles = [
    { id: 101, title: "Sorteo Local de Arte", status: "Activo", participants: 150, endDate: "2025-06-20" },
    { id: 102, title: "Rifa Benéfica Anual", status: "Finalizado", participants: 530, collected: "€2650" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">{user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10"><Settings size={16} className="mr-2" /> Configuración</Button>
          <Button variant="destructive"><LogOut size={16} className="mr-2" /> Cerrar Sesión</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-md bg-card border-border/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-foreground"><Ticket className="text-primary" /> Sorteos en los que participo</CardTitle>
            <CardDescription className="text-muted-foreground">Un resumen de los sorteos en los que estás participando y tus resultados.</CardDescription>
          </CardHeader>
          <CardContent>
            {participatedRaffles.length > 0 ? (
              <ul className="space-y-4">
                {participatedRaffles.map(raffle => (
                  <li key={raffle.id} className="flex items-center justify-between p-3 bg-muted/80 rounded-md">
                    <div>
                      <h3 className="font-semibold text-foreground">{raffle.title}</h3>
                      <p className="text-sm text-muted-foreground">Premio: {raffle.prize}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        raffle.status === "Activo" ? "bg-blue-500/20 text-blue-400" : 
                        raffle.won ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                      }`}>
                        {raffle.won ? <Star size={12} className="inline mr-1" /> : null}
                        {raffle.won ? "¡Ganaste!" : raffle.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-center py-4">Aún no has participado en ningún sorteo.</p>
            )}
            <Button variant="link" className="mt-4 p-0 h-auto text-primary" asChild>
              <Link to="/sorteos">Explorar más sorteos <Gift size={16} className="ml-1.5" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-md bg-card border-border/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-foreground"><Edit3 className="text-primary"/> Mis Sorteos Organizados</CardTitle>
            <CardDescription className="text-muted-foreground">Gestiona los sorteos que has creado y revisa su rendimiento.</CardDescription>
          </CardHeader>
          <CardContent>
             {organizedRaffles.length > 0 ? (
              <ul className="space-y-4">
                {organizedRaffles.map(raffle => (
                  <li key={raffle.id} className="flex items-center justify-between p-3 bg-muted/80 rounded-md">
                    <div>
                      <h3 className="font-semibold text-foreground">{raffle.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {raffle.status === "Activo" ? `${raffle.participants} participantes | Termina: ${raffle.endDate}` : `${raffle.participants} participantes | Recaudado: ${raffle.collected}`}
                      </p>
                    </div>
                     <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">Gestionar</Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-center py-4">Aún no has organizado ningún sorteo.</p>
            )}
            <Button className="mt-4 w-full cta-gradient hover:opacity-90" asChild>
              <Link to="/crear-sorteo">Crear Nuevo Sorteo</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboardPage;
