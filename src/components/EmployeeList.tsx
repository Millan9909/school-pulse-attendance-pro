
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, Mail, Phone, Calendar, MapPin, UserCheck } from "lucide-react";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: 1,
      name: "أحمد محمد العلي",
      position: "معلم رياضيات",
      school: "مدرسة الأمل الابتدائية",
      email: "ahmed.ali@school.edu.sa",
      phone: "+966501234567",
      joinDate: "2023-09-01",
      status: "نشط",
      attendance: 96.5,
      avatar: "أم"
    },
    {
      id: 2,
      name: "فاطمة أحمد السعد",
      position: "معلمة لغة عربية",
      school: "مدرسة النور المتوسطة",
      email: "fatima.saad@school.edu.sa",
      phone: "+966501234568",
      joinDate: "2022-08-15",
      status: "نشط",
      attendance: 98.2,
      avatar: "فس"
    },
    {
      id: 3,
      name: "خالد عبدالله المحمد",
      position: "معلم فيزياء",
      school: "مدرسة المستقبل الثانوية",
      email: "khalid.mohammed@school.edu.sa",
      phone: "+966501234569",
      joinDate: "2023-01-10",
      status: "نشط",
      attendance: 94.8,
      avatar: "خم"
    },
    {
      id: 4,
      name: "نورا سعد القحطاني",
      position: "معلمة إنجليزي",
      school: "مدرسة الإبداع الابتدائية",
      email: "nora.qahtani@school.edu.sa",
      phone: "+966501234570",
      joinDate: "2023-02-01",
      status: "إجازة",
      attendance: 92.1,
      avatar: "نق"
    },
    {
      id: 5,
      name: "عبدالرحمن علي الحسن",
      position: "معلم كيمياء",
      school: "مدرسة العلوم المتقدمة",
      email: "abdulrahman.hassan@school.edu.sa",
      phone: "+966501234571",
      joinDate: "2023-03-15",
      status: "نشط",
      attendance: 97.3,
      avatar: "عح"
    },
    {
      id: 6,
      name: "سارة محمد الزهراني",
      position: "معلمة علوم",
      school: "مدرسة الرواد الدولية",
      email: "sara.zahrani@school.edu.sa",
      phone: "+966501234572",
      joinDate: "2022-09-01",
      status: "نشط",
      attendance: 95.7,
      avatar: "سز"
    }
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.name.includes(searchTerm) || 
    employee.position.includes(searchTerm) ||
    employee.school.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-500";
      case "إجازة": return "bg-yellow-500";
      case "متوقف": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">إدارة الموظفين</h2>
          <p className="text-gray-600 mt-1">متابعة وإدارة جميع الموظفين في النظام</p>
        </div>
        <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
          <Plus className="h-4 w-4 ml-2" />
          إضافة موظف جديد
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="البحث عن موظف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 h-12 text-right"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-4">
            <div className="text-2xl font-bold">486</div>
            <div className="text-sm opacity-90">إجمالي الموظفين</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-4">
            <div className="text-2xl font-bold">462</div>
            <div className="text-sm opacity-90">موظف نشط</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0">
          <CardContent className="p-4">
            <div className="text-2xl font-bold">18</div>
            <div className="text-sm opacity-90">في إجازة</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm opacity-90">موظف جديد</div>
          </CardContent>
        </Card>
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-bold">
                    {employee.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 text-right">{employee.name}</h3>
                  <p className="text-sm text-gray-600 text-right">{employee.position}</p>
                  <Badge className={`${getStatusColor(employee.status)} text-white mt-1`}>
                    {employee.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 ml-2" />
                <span className="text-sm">{employee.school}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 ml-2" />
                <span className="text-sm">{employee.email}</span>
              </div>

              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 ml-2" />
                <span className="text-sm">{employee.phone}</span>
              </div>

              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 ml-2" />
                <span className="text-sm">تاريخ التوظيف: {employee.joinDate}</span>
              </div>

              <div className="flex items-center text-gray-600">
                <UserCheck className="h-4 w-4 ml-2" />
                <span className="text-sm">معدل الحضور: {employee.attendance}%</span>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  عرض الملف
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  تعديل البيانات
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">👤</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">لم يتم العثور على موظفين يطابقون بحثك</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EmployeeList;
