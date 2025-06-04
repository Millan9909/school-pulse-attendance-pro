
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DollarSign, 
  Download, 
  Calculator, 
  TrendingUp,
  TrendingDown,
  FileText,
  Clock,
  AlertTriangle
} from "lucide-react";

const PayrollSystem = () => {
  const [selectedMonth, setSelectedMonth] = useState("2025-06");

  const payrollData = [
    {
      id: 1,
      name: "أحمد محمد العلي",
      avatar: "أم",
      position: "معلم رياضيات",
      school: "مدرسة الأمل",
      basicSalary: 8500,
      allowances: 1200,
      deductions: 340,
      netSalary: 9360,
      workingDays: 22,
      attendedDays: 21,
      lateHours: 2,
      status: "مُحضر"
    },
    {
      id: 2,
      name: "فاطمة أحمد السعد",
      avatar: "فس",
      position: "معلمة لغة عربية",
      school: "مدرسة النور",
      basicSalary: 7800,
      allowances: 1000,
      deductions: 195,
      netSalary: 8605,
      workingDays: 22,
      attendedDays: 22,
      lateHours: 0,
      status: "مُحضر"
    },
    {
      id: 3,
      name: "خالد عبدالله المحمد",
      avatar: "خم",
      position: "معلم فيزياء",
      school: "مدرسة المستقبل",
      basicSalary: 9200,
      allowances: 1400,
      deductions: 610,
      netSalary: 9990,
      workingDays: 22,
      attendedDays: 20,
      lateHours: 5,
      status: "قيد المراجعة"
    },
    {
      id: 4,
      name: "نورا سعد القحطاني",
      avatar: "نق",
      position: "معلمة إنجليزي",
      school: "مدرسة الإبداع",
      basicSalary: 8000,
      allowances: 1100,
      deductions: 800,
      netSalary: 8300,
      workingDays: 22,
      attendedDays: 18,
      lateHours: 0,
      status: "قيد المراجعة"
    }
  ];

  const payrollStats = [
    {
      title: "إجمالي الرواتب",
      value: "2.4M ريال",
      change: "+12%",
      changeType: "increase",
      icon: DollarSign
    },
    {
      title: "متوسط الراتب",
      value: "8,950 ريال",
      change: "+5%",
      changeType: "increase",
      icon: Calculator
    },
    {
      title: "إجمالي الخصومات",
      value: "186K ريال",
      change: "-8%",
      changeType: "decrease",
      icon: TrendingDown
    },
    {
      title: "إجمالي البدلات",
      value: "142K ريال",
      change: "+15%",
      changeType: "increase",
      icon: TrendingUp
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مُحضر": return "bg-green-500";
      case "قيد المراجعة": return "bg-yellow-500";
      case "مُرسل": return "bg-blue-500";
      case "مؤجل": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">نظام كشوف الرواتب</h2>
          <p className="text-gray-600 mt-1">إدارة ومعالجة رواتب الموظفين</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 ml-2" />
            تصدير الكشوف
          </Button>
          <Button className="bg-gradient-to-r from-yellow-600 to-orange-600">
            <Calculator className="h-4 w-4 ml-2" />
            حساب الرواتب
          </Button>
        </div>
      </div>

      {/* Month Selector */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-purple-900">كشوف رواتب شهر</h3>
              <p className="text-purple-700">يونيو 2025</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">الشهر السابق</Button>
              <Button variant="outline" size="sm">الشهر التالي</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {payrollStats.map((stat, index) => (
          <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.changeType === "increase" ? (
                      <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 ml-1" />
                    )}
                    <p className={`text-xs ${stat.changeType === "increase" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payroll List */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">كشوف الرواتب الشهرية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payrollData.map((employee) => (
              <div key={employee.id} className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-14 w-14">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg">
                        {employee.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 text-right">{employee.name}</h4>
                      <p className="text-sm text-gray-600 text-right">{employee.position}</p>
                      <p className="text-xs text-gray-500 text-right">{employee.school}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(employee.status)} text-white`}>
                    {employee.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">الراتب الأساسي</p>
                    <p className="font-semibold text-gray-900">{employee.basicSalary.toLocaleString()} ريال</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">البدلات</p>
                    <p className="font-semibold text-green-600">+{employee.allowances.toLocaleString()} ريال</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">الخصومات</p>
                    <p className="font-semibold text-red-600">-{employee.deductions.toLocaleString()} ريال</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">أيام الحضور</p>
                    <p className="font-semibold text-gray-900">{employee.attendedDays}/{employee.workingDays}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">ساعات التأخير</p>
                    <p className="font-semibold text-yellow-600">{employee.lateHours} ساعة</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">صافي الراتب</p>
                    <p className="text-lg font-bold text-blue-600">{employee.netSalary.toLocaleString()} ريال</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 ml-1" />
                    عرض الكشف
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 ml-1" />
                    تحميل PDF
                  </Button>
                  {employee.status === "قيد المراجعة" && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      اعتماد الكشف
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PayrollSystem;
