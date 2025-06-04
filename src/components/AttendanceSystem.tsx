
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Fingerprint,
  Scan,
  Calendar,
  Download
} from "lucide-react";

const AttendanceSystem = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const todayAttendance = [
    {
      id: 1,
      name: "أحمد محمد العلي",
      avatar: "أم",
      school: "مدرسة الأمل",
      checkIn: "07:45",
      checkOut: "15:30",
      status: "حاضر",
      hoursWorked: "7:45"
    },
    {
      id: 2,
      name: "فاطمة أحمد السعد",
      avatar: "فس",
      school: "مدرسة النور",
      checkIn: "07:50",
      checkOut: "-",
      status: "حاضر",
      hoursWorked: "6:10"
    },
    {
      id: 3,
      name: "خالد عبدالله المحمد",
      avatar: "خم",
      school: "مدرسة المستقبل",
      checkIn: "08:15",
      checkOut: "15:45",
      status: "متأخر",
      hoursWorked: "7:30"
    },
    {
      id: 4,
      name: "نورا سعد القحطاني",
      avatar: "نق",
      school: "مدرسة الإبداع",
      checkIn: "-",
      checkOut: "-",
      status: "غائب",
      hoursWorked: "0:00"
    },
    {
      id: 5,
      name: "عبدالرحمن علي الحسن",
      avatar: "عح",
      school: "مدرسة العلوم",
      checkIn: "07:30",
      checkOut: "15:15",
      status: "حاضر",
      hoursWorked: "7:45"
    }
  ];

  const attendanceStats = [
    { title: "حاضر", count: 342, color: "bg-green-500", icon: CheckCircle },
    { title: "متأخر", count: 23, color: "bg-yellow-500", icon: AlertTriangle },
    { title: "غائب", count: 12, color: "bg-red-500", icon: XCircle },
    { title: "انصراف مبكر", count: 5, color: "bg-orange-500", icon: Clock }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "حاضر": return "bg-green-500";
      case "متأخر": return "bg-yellow-500";
      case "غائب": return "bg-red-500";
      case "انصراف مبكر": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  const handleBiometricScan = () => {
    setIsScanning(true);
    // محاكي البصمة
    setTimeout(() => {
      setIsScanning(false);
      // هنا يمكن إضافة منطق تسجيل الحضور
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">نظام الحضور والانصراف</h2>
          <p className="text-gray-600 mt-1">متابعة حضور الموظفين بالوقت الفعلي</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 ml-2" />
            تصدير التقرير
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
            <Calendar className="h-4 w-4 ml-2" />
            عرض التقويم
          </Button>
        </div>
      </div>

      {/* Biometric Scanner */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Fingerprint className="h-6 w-6" />
            جهاز البصمة الإلكتروني
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className={`w-32 h-32 rounded-full border-4 ${isScanning ? 'border-blue-500 animate-pulse' : 'border-gray-300'} flex items-center justify-center bg-white`}>
              {isScanning ? (
                <Scan className="h-16 w-16 text-blue-500 animate-pulse" />
              ) : (
                <Fingerprint className="h-16 w-16 text-gray-400" />
              )}
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {isScanning ? "جاري المسح..." : "ضع إصبعك على الماسح"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isScanning ? "يتم التحقق من البصمة..." : "لتسجيل الحضور أو الانصراف"}
              </p>
            </div>
            <Button 
              onClick={handleBiometricScan} 
              disabled={isScanning}
              className="bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              {isScanning ? "جاري المسح..." : "بدء المسح"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {attendanceStats.map((stat, index) => (
          <Card key={index} className="bg-white shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Attendance */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">حضور اليوم</CardTitle>
          <p className="text-gray-600">الأربعاء، 4 يونيو 2025</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todayAttendance.map((record) => (
              <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                      {record.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-right">{record.name}</h4>
                    <p className="text-sm text-gray-600 text-right">{record.school}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">دخول</p>
                    <p className="font-semibold text-gray-900">{record.checkIn || "-"}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">خروج</p>
                    <p className="font-semibold text-gray-900">{record.checkOut || "-"}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">ساعات العمل</p>
                    <p className="font-semibold text-gray-900">{record.hoursWorked}</p>
                  </div>
                  
                  <Badge className={`${getStatusColor(record.status)} text-white`}>
                    {record.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceSystem;
