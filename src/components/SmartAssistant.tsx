
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MessageSquare, 
  X, 
  Send,
  Clock,
  Users,
  AlertTriangle,
  TrendingUp,
  Minimize2,
  Maximize2
} from "lucide-react";

const SmartAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");

  const quickSuggestions = [
    "كم عدد الموظفين الغائبين اليوم؟",
    "أظهر تقرير الحضور لهذا الأسبوع",
    "ما هي المدرسة الأعلى في معدل الحضور؟",
    "أنشئ كشف راتب لشهر يونيو"
  ];

  const assistantMessages = [
    {
      id: 1,
      type: "assistant",
      message: "مرحباً! أنا جسري، مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟",
      time: "الآن"
    },
    {
      id: 2,
      type: "user",
      message: "أريد معرفة معدل الحضور لهذا الأسبوع",
      time: "منذ دقيقة"
    },
    {
      id: 3,
      type: "assistant",
      message: "معدل الحضور لهذا الأسبوع هو 94.5%. هذا يعتبر معدل ممتاز! لديك 462 موظف حاضر من أصل 486 موظف. هل تريد تفاصيل أكثر؟",
      time: "منذ دقيقة"
    }
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: "تحسن في الحضور",
      description: "معدل الحضور ارتفع 2.3% هذا الشهر",
      color: "text-green-600"
    },
    {
      icon: AlertTriangle,
      title: "تنبيه: تأخيرات متكررة",
      description: "5 موظفين لديهم تأخيرات متكررة",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "موظفين جدد",
      description: "تم تسجيل 6 موظفين جدد هذا الشهر",
      color: "text-blue-600"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg z-50"
      >
        <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-white shadow-2xl border-0 transition-all duration-300 ${
      isMinimized ? 'w-72 sm:w-80 h-12 sm:h-16' : 'w-80 sm:w-96 h-[500px] sm:h-[600px]'
    }`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-sm sm:text-lg text-gray-900">جسري - المساعد الذكي</CardTitle>
              <div className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full ml-1"></div>
                <span className="text-xs">متصل</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6 sm:h-8 sm:w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4" /> : <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-red-50 hover:text-red-600"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-full pb-4">
          {/* Insights */}
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">📊 رؤى ذكية</h4>
            <div className="space-y-2">
              {insights.map((insight, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <insight.icon className={`h-3 w-3 sm:h-4 sm:w-4 mt-0.5 ${insight.color}`} />
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-gray-900">{insight.title}</p>
                      <p className="text-[10px] sm:text-xs text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-3 sm:mb-4 space-y-2 sm:space-y-3">
            {assistantMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] sm:max-w-xs p-2 sm:p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-xs sm:text-sm leading-tight">{msg.message}</p>
                  <p className={`text-[10px] sm:text-xs mt-1 ${
                    msg.type === 'user' ? 'text-purple-200' : 'text-gray-500'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">💡 اقتراحات سريعة</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {quickSuggestions.slice(0, 2).map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-[10px] sm:text-xs h-auto py-1 px-2 leading-tight"
                  onClick={() => setMessage(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex gap-1 sm:gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اسأل جسري..."
              className="flex-1 text-right text-xs sm:text-sm h-8 sm:h-10"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-8 sm:h-10 px-2 sm:px-3"
            >
              <Send className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default SmartAssistant;
