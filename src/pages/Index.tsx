
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
  Bot,
  Menu,
  X
} from "lucide-react";
import SchoolsGrid from "@/components/SchoolsGrid";
import EmployeeList from "@/components/EmployeeList";
import AttendanceSystem from "@/components/AttendanceSystem";
import PayrollSystem from "@/components/PayrollSystem";
import LeaveManagement from "@/components/LeaveManagement";
import SmartAssistant from "@/components/SmartAssistant";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const tabs = [
    { id: "dashboard", label: "لوحة التحكم", icon: TrendingUp, color: "data-[state=active]:bg-blue-500" },
    { id: "schools", label: "المدارس", icon: School, color: "data-[state=active]:bg-green-500" },
    { id: "employees", label: "الموظفين", icon: Users, color: "data-[state=active]:bg-purple-500" },
    { id: "attendance", label: "الحضور", icon: Clock, color: "data-[state=active]:bg-orange-500" },
    { id: "payroll", label: "الرواتب", icon: DollarSign, color: "data-[state=active]:bg-yellow-500" },
    { id: "leave", label: "الإجازات", icon: Calendar, color: "data-[state=active]:bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Mobile Header */}
      <header className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-40">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <School className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  نظام إدارة المدارس
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">منصة شاملة لإدارة الحضور والرواتب</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Bot className="h-4 w-4 ml-2" />
                جسري المساعد
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="sm:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-8 max-w-7xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          {/* Mobile Navigation */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-1 sm:p-2">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-gray-50 rounded-lg sm:rounded-xl gap-1 sm:gap-0">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id} 
                  className={`flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3 ${tab.color} data-[state=active]:text-white min-h-[60px] sm:min-h-auto`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-[10px] leading-tight text-center">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-4 sm:space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-3 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      <div className="mb-2 sm:mb-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-xl sm:text-3xl font-bold text-gray-900 mt-1 sm:mt-2">{stat.value}</p>
                        <p className="text-[10px] sm:text-xs text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className={`w-8 h-8 sm:w-12 sm:h-12 ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center self-end sm:self-auto`}>
                        <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Quick Actions */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">إجراءات سريعة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  {quickActions.map((action, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-start h-12 sm:h-14 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                    >
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 ${action.color} rounded-md sm:rounded-lg flex items-center justify-center ml-2 sm:ml-3`}>
                        <action.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </div>
                      {action.title}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card className="lg:col-span-2 bg-white shadow-lg border-0">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">الأنشطة الأخيرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 leading-tight">{activity.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                        <Badge variant="outline" className="text-xs flex-shrink-0">
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
