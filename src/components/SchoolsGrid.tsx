
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, MapPin, Users, TrendingUp, Settings } from "lucide-react";

const SchoolsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const schools = [
    {
      id: 1,
      name: "مدرسة الأمل الابتدائية",
      location: "الرياض - حي النرجس",
      employees: 45,
      attendance: 94.2,
      status: "نشط",
      principal: "أ. محمد العلي",
      image: "🏫"
    },
    {
      id: 2,
      name: "مدرسة النور المتوسطة",
      location: "الرياض - حي الملقا",
      employees: 38,
      attendance: 96.1,
      status: "نشط",
      principal: "أ. فاطمة أحمد",
      image: "🎓"
    },
    {
      id: 3,
      name: "مدرسة المستقبل الثانوية",
      location: "الرياض - حي الياسمين",
      employees: 52,
      attendance: 91.8,
      status: "نشط",
      principal: "أ. خالد المحمد",
      image: "📚"
    },
    {
      id: 4,
      name: "مدرسة الإبداع الابتدائية",
      location: "جدة - حي الصفا",
      employees: 41,
      attendance: 93.5,
      status: "نشط",
      principal: "أ. نورا السعد",
      image: "✨"
    },
    {
      id: 5,
      name: "مدرسة العلوم المتقدمة",
      location: "الدمام - حي الفيصلية",
      employees: 47,
      attendance: 95.3,
      status: "قيد الإنشاء",
      principal: "أ. عبدالله الحسن",
      image: "🔬"
    },
    {
      id: 6,
      name: "مدرسة الرواد الدولية",
      location: "الرياض - حي العليا",
      employees: 63,
      attendance: 97.2,
      status: "نشط",
      principal: "أ. سارة القحطاني",
      image: "🌍"
    }
  ];

  const filteredSchools = schools.filter(school =>
    school.name.includes(searchTerm) || school.location.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">إدارة المدارس</h2>
          <p className="text-gray-600 mt-1">متابعة وإدارة جميع المدارس في النظام</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
          <Plus className="h-4 w-4 ml-2" />
          إضافة مدرسة جديدة
        </Button>
      </div>

      {/* Search */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="البحث عن مدرسة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 h-12 text-right"
            />
          </div>
        </CardContent>
      </Card>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchools.map((school) => (
          <Card key={school.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="text-4xl">{school.image}</div>
                <Badge 
                  variant={school.status === "نشط" ? "default" : "secondary"}
                  className={school.status === "نشط" ? "bg-green-500" : "bg-orange-500"}
                >
                  {school.status}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 text-right">
                {school.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 ml-2" />
                <span className="text-sm">{school.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 ml-2" />
                <span className="text-sm">{school.employees} موظف</span>
              </div>

              <div className="flex items-center text-gray-600">
                <TrendingUp className="h-4 w-4 ml-2" />
                <span className="text-sm">معدل الحضور: {school.attendance}%</span>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-sm text-gray-600">المدير: {school.principal}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  عرض التفاصيل
                </Button>
                <Button variant="outline" size="sm" className="px-3">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSchools.length === 0 && (
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">لم يتم العثور على مدارس تطابق بحثك</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SchoolsGrid;
