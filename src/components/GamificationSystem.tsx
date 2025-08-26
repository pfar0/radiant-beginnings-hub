import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Target, Gift, Flame, Users, Zap, Crown, Medal, Award } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  points: number;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: string;
  progress: number;
  maxProgress: number;
  timeLeft: string;
  difficulty: "easy" | "medium" | "hard";
}

const GamificationSystem = () => {
  const [userLevel, setUserLevel] = useState(12);
  const [userPoints, setUserPoints] = useState(2450);
  const [pointsToNextLevel, setPointsToNextLevel] = useState(550);
  const [streak, setStreak] = useState(15);

  const achievements: Achievement[] = [
    {
      id: "first_service",
      title: "Primeiro Passo",
      description: "Use seu primeiro serviço Bandel",
      icon: Star,
      points: 100,
      unlocked: true
    },
    {
      id: "weekly_user",
      title: "Usuário Ativo",
      description: "Use serviços por 7 dias seguidos",
      icon: Flame,
      points: 250,
      unlocked: true
    },
    {
      id: "saver_bronze",
      title: "Economizador Bronze",
      description: "Economize R$ 500 acumulados",
      icon: Medal,
      points: 300,
      unlocked: true
    },
    {
      id: "saver_silver",
      title: "Economizador Prata",
      description: "Economize R$ 1.500 acumulados",
      icon: Trophy,
      points: 500,
      unlocked: false,
      progress: 1250,
      maxProgress: 1500
    },
    {
      id: "referral_master",
      title: "Embaixador",
      description: "Indique 5 amigos para o Bandel",
      icon: Users,
      points: 750,
      unlocked: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: "service_explorer",
      title: "Explorador",
      description: "Use todos os 7 tipos de serviços",
      icon: Target,
      points: 400,
      unlocked: false,
      progress: 5,
      maxProgress: 7
    }
  ];

  const challenges: Challenge[] = [
    {
      id: "weekly_health",
      title: "Semana da Saúde",
      description: "Use 3 serviços de saúde esta semana",
      reward: "200 pontos + voucher farmácia",
      progress: 2,
      maxProgress: 3,
      timeLeft: "3 dias",
      difficulty: "easy"
    },
    {
      id: "transport_challenge",
      title: "Mobilidade Sustentável",
      description: "Use transporte público 10 vezes este mês",
      reward: "500 pontos + crédito extra",
      progress: 6,
      maxProgress: 10,
      timeLeft: "12 dias",
      difficulty: "medium"
    },
    {
      id: "social_challenge",
      title: "Amigo Bandel",
      description: "Convide 2 amigos neste mês",
      reward: "1000 pontos + mês grátis",
      progress: 0,
      maxProgress: 2,
      timeLeft: "18 dias",
      difficulty: "hard"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Ana Silva", points: 5420, level: 18, badge: "👑" },
    { rank: 2, name: "Carlos Santos", points: 4890, level: 16, badge: "🥈" },
    { rank: 3, name: "Maria Oliveira", points: 4650, level: 15, badge: "🥉" },
    { rank: 4, name: "Você", points: userPoints, level: userLevel, badge: "⭐", isUser: true },
    { rank: 5, name: "João Costa", points: 2180, level: 11, badge: "" },
  ];

  const rewards = [
    { id: 1, title: "Desconto de 50% no Uber", cost: 500, icon: Gift, available: true },
    { id: 2, title: "Consulta médica gratuita", cost: 800, icon: Star, available: true },
    { id: 3, title: "Voucher R$ 50 iFood", cost: 1000, icon: Gift, available: true },
    { id: 4, title: "Mês grátis Spotify Premium", cost: 1200, icon: Star, available: false },
    { id: 5, title: "Kit de academia", cost: 2000, icon: Trophy, available: false }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-green-100 text-green-700";
      case "medium": return "bg-yellow-100 text-yellow-700";
      case "hard": return "bg-red-100 text-red-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* User Level & Progress */}
      <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">Nível {userLevel}</h3>
              <p className="opacity-90">Usuário Avançado</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">{userPoints.toLocaleString()} pontos</div>
              <div className="text-sm opacity-90">{pointsToNextLevel} para o próximo nível</div>
            </div>
          </div>
          <Progress 
            value={((3000 - pointsToNextLevel) / 3000) * 100} 
            className="h-3 bg-white/20"
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5" />
              <span className="text-sm">{streak} dias seguidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5" />
              <span className="text-sm">Top 15% dos usuários</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              Conquistas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-3 rounded-lg border ${
                  achievement.unlocked 
                    ? "bg-green-50 border-green-200" 
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    achievement.unlocked 
                      ? "bg-green-100 text-green-600" 
                      : "bg-slate-100 text-slate-400"
                  }`}>
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-xs text-slate-600">{achievement.description}</p>
                    {achievement.progress !== undefined && (
                      <div className="mt-2">
                        <Progress 
                          value={(achievement.progress / (achievement.maxProgress || 1)) * 100} 
                          className="h-2"
                        />
                        <div className="text-xs text-slate-500 mt-1">
                          {achievement.progress}/{achievement.maxProgress}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-yellow-600">
                      +{achievement.points}
                    </div>
                    {achievement.unlocked && (
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        Desbloqueado
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Desafios Ativos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-sm">{challenge.title}</h4>
                    <p className="text-xs text-slate-600">{challenge.description}</p>
                  </div>
                  <Badge className={getDifficultyColor(challenge.difficulty)}>
                    {challenge.difficulty}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <Progress 
                    value={(challenge.progress / challenge.maxProgress) * 100} 
                    className="h-2"
                  />
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      {challenge.progress}/{challenge.maxProgress}
                    </span>
                    <span className="text-slate-500">
                      {challenge.timeLeft} restantes
                    </span>
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    🎁 {challenge.reward}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Ranking Mensal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-3 p-2 rounded-lg ${
                    user.isUser ? "bg-blue-50 border border-blue-200" : "hover:bg-slate-50"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold">
                    {user.badge || user.rank}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{user.name}</div>
                    <div className="text-xs text-slate-500">Nível {user.level}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-sm">{user.points.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">pontos</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rewards Store */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-green-600" />
              Loja de Recompensas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className={`p-3 border rounded-lg ${
                    reward.available ? "border-slate-200" : "border-slate-100 opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      reward.available 
                        ? "bg-green-100 text-green-600" 
                        : "bg-slate-100 text-slate-400"
                    }`}>
                      <reward.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{reward.title}</h4>
                      <div className="text-xs text-slate-500">{reward.cost} pontos</div>
                    </div>
                    <Button
                      size="sm"
                      variant={reward.available ? "default" : "outline"}
                      disabled={!reward.available || userPoints < reward.cost}
                      className="text-xs"
                    >
                      {reward.available ? "Resgatar" : "Bloqueado"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GamificationSystem;