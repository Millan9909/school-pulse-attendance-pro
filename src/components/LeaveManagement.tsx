
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Calendar, 
  Plus, 
  Check, 
  X, 
  Clock,
  FileText,
  AlertCircle,
  CheckCircle,
  User
} from "lucide-react";

const LeaveManagement = () => {
  const pendingRequests = [
    {
      id: 1,
      name: "أحمد محمد العلي",
      avatar: "أم",
      school: "مدرسة الأمل",
      leaveType: "إجازة مرضية",
      startDate: "2025-06-10",
      endDate: "2025-06-12",
      days: 3,
      reason: "ظروف صحية طارئة",
      submittedDate: "2025-06-05",
      status: "قيد المراجعة"
    },
    {
      id: 2,
      name: "فاطمة أحمد السعد",
      avatar: "فس",
      school: "مدرسة النور",
      leaveType: "إجازة شخصية",
      startDate: "2025-06-15",
      endDate: "2025-06-16",
      days: 2,
      reason: "ظروف عائلية",
      submittedDate: "2025-06-04",
      status: "قيد المراجعة"
    },
    {
      id: 3,
      name: "خالد عبدالله المحمد",
      avatar: "خم",
      school: "مدرسة المستقبل",
      leaveType: "إجازة سنوية",
      startDate: "2025-06-20",
      endDate: "2025-06-27",
      days: 8,
      reason: "إجازة صيفية مجدولة",
      submittedDate: "2025-06-03",
      status: "مُوافق عليها"
    }
  ];

  const leaveStats = [
    {
      title: "طلبات قيد المراجعة",
      count: 8,
      color: "bg-yellow-500",
      icon: Clock
    },
    {
      title: "طلبات مُوافق عليها",
      count: 24,
      color: "bg-green-500",
      icon: CheckCircle
    },
    {
      title: "طلبات مرفوضة",
      count: 3,
      color: "bg-red-500",
      icon: X
    },
    {
      title: "في إجازة حالياً",
      count: 12,
      color: "bg-blue-500",
      icon: User
    }
  ];

  const leaveTypes = [
    { name: "إجازة سنوية", color: "bg-blue-500", count: 15 },
    { name: "إجازة مرضية", color: "bg-red-500", count: 8 },
    { name: "إجازة شخصية", color: "bg-purple-500", count: 6 },
    { name: "إجازة طوارئ", color: "bg-orange-500", count: 3 },
    { name: "إجازة أمومة", color: "bg-pink-500", count: 2 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "قيد المراجعة": return "bg-yellow-500";
      case "مُوافق عليها": return "bg-green-500";
      case "مرفوضة": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getLeaveTypeColor = (type: string) => {
    switch (type) {
      case "إجازة سنوية": return "bg-blue-500";
      case "إجازة مرضية": return "bg-red-500";
      case "إجازة شخصية": return "bg-purple-500";
      case "إجازة طوارئ": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">إدارة الإجازات</h2>
          <p className="text-gray-600 mt-1">متابعة ومراجعة طلبات الإجازات</p>
        </div>
        <Button className="bg-gradient-to-r from-green-600 to-emerald-600">
          <Plus className="h-4 w-4 ml-2" />
          طلب إجازة جديد
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {leaveStats.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leave Types */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">أنواع الإجازات</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {leaveTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${type.color} rounded-full`}></div>
                  <span className="font-medium text-gray-900">{type.name}</span>
                </div>
                <Badge variant="outline">{type.count}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Leave Requests */}
        <Card className="lg:col-span-2 bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">طلبات الإجازات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                          {request.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-right">{request.name}</h4>
                        <p className="text-sm text-gray-600 text-right">{request.school}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(request.status)} text-white`}>
                      {request.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-gray-500">نوع الإجازة</p>
                      <Badge className={`${getLeaveTypeColor(request.leaveType)} text-white mt-1`}>
                        {request.leaveType}
                      </Badge>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500">تاريخ البداية</p>
                      <p className="font-semibold text-gray-900">{request.startDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500">تاريخ النهاية</p>
                      <p className="font-semibold text-gray-900">{request.endDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500">عدد الأيام</p>
                      <p className="font-semibold text-gray-900">{request.days} أيام</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">السبب</p>
                    <p className="text-sm text-gray-700">{request.reason}</p>
                  </div>

                  {request.status === "قيد المراجعة" && (
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Check className="h-4 w-4 ml-1" />
                        موافقة
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                        <X className="h-4 w-4 ml-1" />
                        رفض
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 ml-1" />
                        التفاصيل
                      </Button>
                    </div>
                  )}

                  {request.status === "مُوافق عليها" && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 ml-1" />
                      <span className="text-sm">تمت الموافقة على الطلب</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaveManagement;
