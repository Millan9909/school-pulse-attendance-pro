import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  School, 
  Clock, 
  DollarSign, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  UserPlus,
  FileText,
  Bot
} from "lucide-react";
import SchoolsGrid from "@/components/SchoolsGrid";
import EmployeeList from "@/components/EmployeeList";
import AttendanceSystem from "@/components/AttendanceSystem";
import PayrollSystem from "@/components/PayrollSystem";
import LeaveManagement from "@/components/LeaveManagement";
import SmartAssistant from "@/components/SmartAssistant";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    {
      title: "إجمالي المدارس",
      value: "12",
      icon: School,
      color: "bg-blue-500",
      change: "+2 هذا الشهر"
    },
    {
      title: "إجمالي الموظفين",
      value: "486",
      icon: Users,
      color: "bg-green-500",
      change: "+24 موظف جديد"
    },
    {
      title: "معدل الحضور",
      value: "94.5%",
      icon: CheckCircle,
      color: "bg-emerald-500",
      change: "+2.3% من الشهر الماضي"
    },
    {
      title: "إجمالي الرواتب",
      value: "2.4M ريال",
      icon: DollarSign,
      color: "bg-yellow-500",
      change: "مدفوع بالكامل"
    }
  ];

  const quickActions = [
    { title: "إضافة مدرسة جديدة", icon: School, color: "bg-blue-500" },
    { title: "تسجيل موظف جديد", icon: UserPlus, color: "bg-green-500" },
    { title: "معاينة التقارير", icon: FileText, color: "bg-purple-500" },
    { title: "إدارة الإجازات", icon: Calendar, color: "bg-orange-500" }
  ];

  const recentActivities = [
    { text: "تم تسجيل حضور 23 موظف في مدرسة الأمل", time: "منذ 5 دقائق", type: "attendance" },
    { text: "طلب إجازة جديد من أحمد محمد", time: "منذ 15 دقيقة", type: "leave" },
    { text: "تم إنشاء كشف راتب شهر نوفمبر", time: "منذ ساعة", type: "payroll" },
    { text: "تسجيل 3 موظفين جدد في مدرسة النور", time: "منذ ساعتين", type: "employee" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <School className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  نظام إدارة المدارس
                </h1>
                <p className="text-sm text-gray-600">منصة شاملة لإدارة الحضور والرواتب</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bot className="h-4 w-4 ml-2" />
                جسري المساعد الذكي
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Navigation Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-2">
            <TabsList className="grid w-full grid-cols-6 bg-gray-50 rounded-xl">
              <TabsTrigger value="dashboard" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <TrendingUp className="h-4 w-4" />
                لوحة التحكم
              </TabsTrigger>
              <TabsTrigger value="schools" className="flex items-center gap-2 data-[state=active]:bg-green-500 data-[state=active]:text-white">
                <School className="h-4 w-4" />
                المدارس
              </TabsTrigger>
              <TabsTrigger value="employees" className="flex items-center gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                <Users className="h-4 w-4" />
                الموظفين
              </TabsTrigger>
              <TabsTrigger value="attendance" className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                <Clock className="h-4 w-4" />
                الحضور
              </TabsTrigger>
              <TabsTrigger value="payroll" className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                <DollarSign className="h-4 w-4" />
                الرواتب
              </TabsTrigger>
              <TabsTrigger value="leave" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white">
                <Calendar className="h-4 w-4" />
                الإجازات
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">إجراءات سريعة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-start h-14 hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center ml-3`}>
                        <action.icon className="h-4 w-4 text-white" />
                      </div>
                      {action.title}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card className="lg:col-span-2 bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">الأنشطة الأخيرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {activity.type === 'attendance' ? 'حضور' : 
                           activity.type === 'leave' ? 'إجازة' :
                           activity.type === 'payroll' ? 'راتب' : 'موظف'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="schools">
            <SchoolsGrid />
          </TabsContent>

          <TabsContent value="employees">
            <EmployeeList />
          </TabsContent>

          <TabsContent value="attendance">
            <AttendanceSystem />
          </TabsContent>

          <TabsContent value="payroll">
            <PayrollSystem />
          </TabsContent>

          <TabsContent value="leave">
            <LeaveManagement />
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Smart Assistant */}
      <SmartAssistant />
    </div>
  );
};

export default Index;
