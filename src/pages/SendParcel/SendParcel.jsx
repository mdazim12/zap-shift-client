import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const branchData = [
  {
    "region": "Dhaka",
    "district": "Dhaka",
    "city": "Dhaka",
    "covered_area": ["Uttara", "Dhanmondi", "Mirpur", "Mohammadpur"],
    "status": "active",
    "flowchart": "https://example.com/dhaka-flowchart.png",
    "longitude": 90.4125,
    "latitude": 23.8103
  },
  {
    "region": "Dhaka",
    "district": "Faridpur",
    "city": "Faridpur",
    "covered_area": ["Goalanda", "Boalmari", "Bhanga"],
    "status": "active",
    "flowchart": "https://example.com/faridpur-flowchart.png",
    "longitude": 89.8333,
    "latitude": 23.6
  },
  {
    "region": "Dhaka",
    "district": "Gazipur",
    "city": "Gazipur",
    "covered_area": ["Tongi", "Kaliakair", "Sreepur"],
    "status": "active",
    "flowchart": "https://example.com/gazipur-flowchart.png",
    "longitude": 90.4203,
    "latitude": 23.9999
  },
  {
    "region": "Dhaka",
    "district": "Gopalganj",
    "city": "Gopalganj",
    "covered_area": ["Tungipara", "Kotalipara", "Kashiani"],
    "status": "active",
    "flowchart": "https://example.com/gopalganj-flowchart.png",
    "longitude": 89.8266,
    "latitude": 23.0052
  },
  {
    "region": "Dhaka",
    "district": "Kishoreganj",
    "city": "Kishoreganj",
    "covered_area": ["Bajitpur", "Kuliarchar", "Pakundia"],
    "status": "active",
    "flowchart": "https://example.com/kishoreganj-flowchart.png",
    "longitude": 90.7829,
    "latitude": 24.426
  },
  {
    "region": "Dhaka",
    "district": "Madaripur",
    "city": "Madaripur",
    "covered_area": ["Rajoir", "Kalkini", "Shibchar"],
    "status": "active",
    "flowchart": "https://example.com/madaripur-flowchart.png",
    "longitude": 90.2,
    "latitude": 23.17
  },
  {
    "region": "Dhaka",
    "district": "Manikganj",
    "city": "Manikganj",
    "covered_area": ["Saturia", "Shivalaya", "Ghior"],
    "status": "active",
    "flowchart": "https://example.com/manikganj-flowchart.png",
    "longitude": 89.9767,
    "latitude": 23.8617
  },
  {
    "region": "Dhaka",
    "district": "Munshiganj",
    "city": "Munshiganj",
    "covered_area": ["Sreenagar", "Lohajang", "Sirajdikhan"],
    "status": "active",
    "flowchart": "https://example.com/munshiganj-flowchart.png",
    "longitude": 90.5305,
    "latitude": 23.55
  },
  {
    "region": "Dhaka",
    "district": "Narayanganj",
    "city": "Narayanganj",
    "covered_area": ["Fatullah", "Siddhirganj", "Rupganj"],
    "status": "active",
    "flowchart": "https://example.com/narayanganj-flowchart.png",
    "longitude": 90.5,
    "latitude": 23.62
  },
  {
    "region": "Dhaka",
    "district": "Narsingdi",
    "city": "Narsingdi",
    "covered_area": ["Palash", "Belabo", "Raipura"],
    "status": "active",
    "flowchart": "https://example.com/narsingdi-flowchart.png",
    "longitude": 90.7156,
    "latitude": 23.9226
  },
  {
    "region": "Dhaka",
    "district": "Rajbari",
    "city": "Rajbari",
    "covered_area": ["Pangsha", "Kalukhali", "Baliakandi"],
    "status": "active",
    "flowchart": "https://example.com/rajbari-flowchart.png",
    "longitude": 89.65,
    "latitude": 23.7576
  },
  {
    "region": "Dhaka",
    "district": "Shariatpur",
    "city": "Shariatpur",
    "covered_area": ["Zajira", "Naria", "Gosairhat"],
    "status": "active",
    "flowchart": "https://example.com/shariatpur-flowchart.png",
    "longitude": 90.4308,
    "latitude": 23.22
  },
  {
    "region": "Dhaka",
    "district": "Tangail",
    "city": "Tangail",
    "covered_area": ["Delduar", "Ghatail", "Kalihati"],
    "status": "active",
    "flowchart": "https://example.com/tangail-flowchart.png",
    "longitude": 89.92,
    "latitude": 24.25
  },
  {
    "region": "Chattogram",
    "district": "Chattogram",
    "city": "Chattogram",
    "covered_area": [
      "Pahartali",
      "Kotwali",
      "Halishahar",
      "Panchlaish",
      "Agrabad",
      "Chandgaon"
    ],
    "status": "active",
    "flowchart": "https://example.com/chattogram-flowchart.png",
    "longitude": 91.8123,
    "latitude": 22.3569
  },
  {
    "region": "Chattogram",
    "district": "Cox's Bazar",
    "city": "Cox's Bazar",
    "covered_area": ["Teknaf", "Ukhia", "Chakaria", "Ramu"],
    "status": "active",
    "flowchart": "https://example.com/coxbazar-flowchart.png",
    "longitude": 92.0165,
    "latitude": 21.4272
  },
  {
    "region": "Chattogram",
    "district": "Cumilla",
    "city": "Cumilla",
    "covered_area": ["Laksam", "Debidwar", "Chandina", "Muradnagar"],
    "status": "active",
    "flowchart": "https://example.com/cumilla-flowchart.png",
    "longitude": 91.1809,
    "latitude": 23.4573
  },
  {
    "region": "Chattogram",
    "district": "Brahmanbaria",
    "city": "Brahmanbaria",
    "covered_area": ["Nabinagar", "Ashuganj", "Sarail"],
    "status": "active",
    "flowchart": "https://example.com/brahmanbaria-flowchart.png",
    "longitude": 91.1116,
    "latitude": 23.9571
  },
  {
    "region": "Chattogram",
    "district": "Chandpur",
    "city": "Chandpur",
    "covered_area": ["Haimchar", "Matlab", "Shahrasti"],
    "status": "active",
    "flowchart": "https://example.com/chandpur-flowchart.png",
    "longitude": 90.85,
    "latitude": 23.2333
  },
  {
    "region": "Chattogram",
    "district": "Feni",
    "city": "Feni",
    "covered_area": ["Parshuram", "Daganbhuiyan", "Chhagalnaiya"],
    "status": "active",
    "flowchart": "https://example.com/feni-flowchart.png",
    "longitude": 91.4,
    "latitude": 23.0167
  },
  {
    "region": "Chattogram",
    "district": "Khagrachari",
    "city": "Khagrachari",
    "covered_area": ["Ramgarh", "Mahalchari", "Dighinala"],
    "status": "active",
    "flowchart": "https://example.com/khagrachari-flowchart.png",
    "longitude": 91.9667,
    "latitude": 23.1
  },
  {
    "region": "Chattogram",
    "district": "Lakshmipur",
    "city": "Lakshmipur",
    "covered_area": ["Raipur", "Ramganj", "Kamalnagar"],
    "status": "active",
    "flowchart": "https://example.com/lakshmipur-flowchart.png",
    "longitude": 90.8415,
    "latitude": 22.9444
  },
  {
    "region": "Chattogram",
    "district": "Noakhali",
    "city": "Noakhali",
    "covered_area": ["Begumganj", "Senbagh", "Chatkhil"],
    "status": "active",
    "flowchart": "https://example.com/noakhali-flowchart.png",
    "longitude": 91.0995,
    "latitude": 22.8245
  },
  {
    "region": "Chattogram",
    "district": "Rangamati",
    "city": "Rangamati",
    "covered_area": ["Baghaichhari", "Kaptai", "Juraichhari"],
    "status": "active",
    "flowchart": "https://example.com/rangamati-flowchart.png",
    "longitude": 92.2,
    "latitude": 22.65
  },
  {
    "region": "Sylhet",
    "district": "Sylhet",
    "city": "Sylhet",
    "covered_area": [
      "Zindabazar",
      "Ambarkhana",
      "Dargah Gate",
      "South Surma",
      "Subid Bazar",
      "Tilagor"
    ],
    "status": "active",
    "flowchart": "https://example.com/sylhet-flowchart.png",
    "longitude": 91.8662,
    "latitude": 24.8949
  },
  {
    "region": "Sylhet",
    "district": "Moulvibazar",
    "city": "Moulvibazar",
    "covered_area": ["Sreemangal", "Kamalganj", "Kulaura", "Barlekha"],
    "status": "active",
    "flowchart": "https://example.com/moulvibazar-flowchart.png",
    "longitude": 91.7832,
    "latitude": 24.4826
  },
  {
    "region": "Sylhet",
    "district": "Habiganj",
    "city": "Habiganj",
    "covered_area": ["Shaistaganj", "Madhabpur", "Chunarughat", "Nabiganj"],
    "status": "active",
    "flowchart": "https://example.com/habiganj-flowchart.png",
    "longitude": 91.4026,
    "latitude": 24.3745
  },
  {
    "region": "Sylhet",
    "district": "Sunamganj",
    "city": "Sunamganj",
    "covered_area": ["Jagannathpur", "Chhatak", "Tahirpur", "Dowarabazar"],
    "status": "active",
    "flowchart": "https://example.com/sunamganj-flowchart.png",
    "longitude": 91.395,
    "latitude": 25.0658
  },
  {
    "region": "Rangpur",
    "district": "Rangpur",
    "city": "Rangpur",
    "covered_area": [
      "Jahaj Company",
      "Pairaband",
      "Mahiganj",
      "Satmatha",
      "Lalbagh"
    ],
    "status": "active",
    "flowchart": "https://example.com/rangpur-flowchart.png",
    "longitude": 89.2752,
    "latitude": 25.746
  },
  {
    "region": "Rangpur",
    "district": "Dinajpur",
    "city": "Dinajpur",
    "covered_area": ["Birampur", "Fulbari", "Parbatipur", "Nawabganj"],
    "status": "active",
    "flowchart": "https://example.com/dinajpur-flowchart.png",
    "longitude": 88.6414,
    "latitude": 25.6275
  },
  {
    "region": "Rangpur",
    "district": "Thakurgaon",
    "city": "Thakurgaon",
    "covered_area": ["Pirganj", "Ranisankail", "Baliadangi"],
    "status": "active",
    "flowchart": "https://example.com/thakurgaon-flowchart.png",
    "longitude": 88.466,
    "latitude": 26.0333
  },
  {
    "region": "Rangpur",
    "district": "Panchagarh",
    "city": "Panchagarh",
    "covered_area": ["Tetulia", "Boda", "Atwari"],
    "status": "active",
    "flowchart": "https://example.com/panchagarh-flowchart.png",
    "longitude": 88.5658,
    "latitude": 26.3411
  },
  {
    "region": "Rangpur",
    "district": "Nilphamari",
    "city": "Nilphamari",
    "covered_area": ["Saidpur", "Domar", "Jaldhaka"],
    "status": "active",
    "flowchart": "https://example.com/nilphamari-flowchart.png",
    "longitude": 88.856,
    "latitude": 25.931
  },
  {
    "region": "Rangpur",
    "district": "Lalmonirhat",
    "city": "Lalmonirhat",
    "covered_area": ["Hatibandha", "Patgram", "Aditmari"],
    "status": "active",
    "flowchart": "https://example.com/lalmonirhat-flowchart.png",
    "longitude": 89.1662,
    "latitude": 25.9167
  },
  {
    "region": "Rangpur",
    "district": "Kurigram",
    "city": "Kurigram",
    "covered_area": ["Nageshwari", "Bhurungamari", "Chilmari", "Ulipur"],
    "status": "active",
    "flowchart": "https://example.com/kurigram-flowchart.png",
    "longitude": 89.65,
    "latitude": 25.8054
  },
  {
    "region": "Rangpur",
    "district": "Gaibandha",
    "city": "Gaibandha",
    "covered_area": ["Gobindaganj", "Sundarganj", "Palashbari", "Phulchhari"],
    "status": "active",
    "flowchart": "https://example.com/gaibandha-flowchart.png",
    "longitude": 89.5418,
    "latitude": 25.3288
  },
  {
    "region": "Khulna",
    "district": "Khulna",
    "city": "Khulna",
    "covered_area": [
      "Sonadanga",
      "Khalishpur",
      "Daulatpur",
      "Shib Bari",
      "Boyra"
    ],
    "status": "active",
    "flowchart": "https://example.com/khulna-flowchart.png",
    "longitude": 89.5672,
    "latitude": 22.8456
  },
  {
    "region": "Khulna",
    "district": "Jessore",
    "city": "Jessore",
    "covered_area": ["Chowgachha", "Bagharpara", "Manirampur", "Abhaynagar"],
    "status": "active",
    "flowchart": "https://example.com/jessore-flowchart.png",
    "longitude": 89.2167,
    "latitude": 23.17
  },
  {
    "region": "Khulna",
    "district": "Satkhira",
    "city": "Satkhira",
    "covered_area": ["Tala", "Assasuni", "Kalaroa", "Debhata"],
    "status": "active",
    "flowchart": "https://example.com/satkhira-flowchart.png",
    "longitude": 89.0809,
    "latitude": 22.7085
  },
  {
    "region": "Khulna",
    "district": "Bagerhat",
    "city": "Bagerhat",
    "covered_area": ["Mongla", "Rampal", "Fakirhat", "Kachua"],
    "status": "active",
    "flowchart": "https://example.com/bagerhat-flowchart.png",
    "longitude": 89.7926,
    "latitude": 22.6516
  },
  {
    "region": "Khulna",
    "district": "Magura",
    "city": "Magura",
    "covered_area": ["Sreepur", "Mohammadpur", "Shalikha"],
    "status": "active",
    "flowchart": "https://example.com/magura-flowchart.png",
    "longitude": 89.4194,
    "latitude": 23.4853
  },
  {
    "region": "Khulna",
    "district": "Narail",
    "city": "Narail",
    "covered_area": ["Lohagara", "Kalia", "Narail Sadar"],
    "status": "active",
    "flowchart": "https://example.com/narail-flowchart.png",
    "longitude": 89.5,
    "latitude": 23.1667
  },
  {
    "region": "Khulna",
    "district": "Jhenaidah",
    "city": "Jhenaidah",
    "covered_area": ["Harinakunda", "Shailkupa", "Kaliganj"],
    "status": "active",
    "flowchart": "https://example.com/jhenaidah-flowchart.png",
    "longitude": 89.1833,
    "latitude": 23.5333
  },
  {
    "region": "Khulna",
    "district": "Chuadanga",
    "city": "Chuadanga",
    "covered_area": ["Alamdanga", "Damurhuda", "Jibannagar"],
    "status": "active",
    "flowchart": "https://example.com/chuadanga-flowchart.png",
    "longitude": 88.85,
    "latitude": 23.64
  },
  {
    "region": "Khulna",
    "district": "Meherpur",
    "city": "Meherpur",
    "covered_area": ["Mujibnagar", "Gangni"],
    "status": "active",
    "flowchart": "https://example.com/meherpur-flowchart.png",
    "longitude": 88.6318,
    "latitude": 23.7623
  },
  {
    "region": "Rajshahi",
    "district": "Rajshahi",
    "city": "Rajshahi",
    "covered_area": ["Boalia", "Rajpara", "Motihar", "Shah Makhdum", "Paba"],
    "status": "active",
    "flowchart": "https://example.com/rajshahi-flowchart.png",
    "longitude": 88.6087,
    "latitude": 24.3745
  },
  {
    "region": "Rajshahi",
    "district": "Natore",
    "city": "Natore",
    "covered_area": ["Baraigram", "Bagatipara", "Lalpur", "Singra"],
    "status": "active",
    "flowchart": "https://example.com/natore-flowchart.png",
    "longitude": 89,
    "latitude": 24.4167
  },
  {
    "region": "Rajshahi",
    "district": "Naogaon",
    "city": "Naogaon",
    "covered_area": ["Manda", "Sapahar", "Porsha", "Patnitala"],
    "status": "active",
    "flowchart": "https://example.com/naogaon-flowchart.png",
    "longitude": 88.93,
    "latitude": 24.8236
  },
  {
    "region": "Rajshahi",
    "district": "Chapainawabganj",
    "city": "Chapainawabganj",
    "covered_area": ["Shibganj", "Bholahat", "Gomostapur"],
    "status": "active",
    "flowchart": "https://example.com/chapai-flowchart.png",
    "longitude": 88.27,
    "latitude": 24.5962
  },
  {
    "region": "Rajshahi",
    "district": "Pabna",
    "city": "Pabna",
    "covered_area": ["Ishwardi", "Bera", "Chatmohar", "Atgharia"],
    "status": "active",
    "flowchart": "https://example.com/pabna-flowchart.png",
    "longitude": 89.2331,
    "latitude": 24.0037
  },
  {
    "region": "Rajshahi",
    "district": "Sirajganj",
    "city": "Sirajganj",
    "covered_area": ["Ullapara", "Kazipur", "Shahjadpur", "Belkuchi"],
    "status": "active",
    "flowchart": "https://example.com/sirajganj-flowchart.png",
    "longitude": 89.7167,
    "latitude": 24.45
  },
  {
    "region": "Rajshahi",
    "district": "Joypurhat",
    "city": "Joypurhat",
    "covered_area": ["Akkelpur", "Kalai", "Panchbibi"],
    "status": "active",
    "flowchart": "https://example.com/joypurhat-flowchart.png",
    "longitude": 89.0412,
    "latitude": 25.0953
  },
  {
    "region": "Rajshahi",
    "district": "Bogura",
    "city": "Bogura",
    "covered_area": [
      "Sariakandi",
      "Sonatola",
      "Gabtali",
      "Sherpur",
      "Shajahanpur"
    ],
    "status": "active",
    "flowchart": "https://example.com/bogura-flowchart.png",
    "longitude": 89.37,
    "latitude": 24.85
  },
  {
    "region": "Barisal",
    "district": "Barisal",
    "city": "Barisal",
    "covered_area": [
      "Band Road",
      "Cox’s Road",
      "Kawnia",
      "Rupatali",
      "Nathullabad"
    ],
    "status": "active",
    "flowchart": "https://example.com/barisal-flowchart.png",
    "longitude": 90.3667,
    "latitude": 22.7
  },
  {
    "region": "Barisal",
    "district": "Bhola",
    "city": "Bhola",
    "covered_area": ["Borhanuddin", "Tazumuddin", "Daulatkhan", "Char Fasson"],
    "status": "active",
    "flowchart": "https://example.com/bhola-flowchart.png",
    "longitude": 90.6311,
    "latitude": 22.685
  },
  {
    "region": "Barisal",
    "district": "Patuakhali",
    "city": "Patuakhali",
    "covered_area": ["Kalapara", "Mirzaganj", "Dashmina", "Galachipa"],
    "status": "active",
    "flowchart": "https://example.com/patuakhali-flowchart.png",
    "longitude": 90.3333,
    "latitude": 22.35
  },
  {
    "region": "Barisal",
    "district": "Pirojpur",
    "city": "Pirojpur",
    "covered_area": ["Mathbaria", "Bhandaria", "Kawkhali", "Nazirpur"],
    "status": "active",
    "flowchart": "https://example.com/pirojpur-flowchart.png",
    "longitude": 89.975,
    "latitude": 22.5833
  },
  {
    "region": "Barisal",
    "district": "Barguna",
    "city": "Barguna",
    "covered_area": ["Amtali", "Patharghata", "Betagi", "Bamna"],
    "status": "active",
    "flowchart": "https://example.com/barguna-flowchart.png",
    "longitude": 90.1167,
    "latitude": 22.1667
  },
  {
    "region": "Barisal",
    "district": "Jhalokati",
    "city": "Jhalokati",
    "covered_area": ["Nalchity", "Rajapur", "Kathalia"],
    "status": "active",
    "flowchart": "https://example.com/jhalokati-flowchart.png",
    "longitude": 90.2167,
    "latitude": 22.6417
  },
  {
    "region": "Mymensingh",
    "district": "Mymensingh",
    "city": "Mymensingh",
    "covered_area": [
      "Trishal",
      "Muktagachha",
      "Bhaluka",
      "Phulpur",
      "Haluaghat"
    ],
    "status": "active",
    "flowchart": "https://example.com/mymensingh-flowchart.png",
    "longitude": 90.3987,
    "latitude": 24.7539
  },
  {
    "region": "Mymensingh",
    "district": "Netrokona",
    "city": "Netrokona",
    "covered_area": ["Khaliajuri", "Mohanganj", "Durgapur", "Barhatta"],
    "status": "active",
    "flowchart": "https://example.com/netrokona-flowchart.png",
    "longitude": 90.7333,
    "latitude": 24.8833
  },
  {
    "region": "Mymensingh",
    "district": "Jamalpur",
    "city": "Jamalpur",
    "covered_area": ["Madarganj", "Islampur", "Sarishabari", "Baksiganj"],
    "status": "active",
    "flowchart": "https://example.com/jamalpur-flowchart.png",
    "longitude": 89.9333,
    "latitude": 24.9167
  },
  {
    "region": "Mymensingh",
    "district": "Sherpur",
    "city": "Sherpur",
    "covered_area": ["Nakla", "Nalitabari", "Jhenaigati", "Sreebardi"],
    "status": "active",
    "flowchart": "https://example.com/sherpur-flowchart.png",
    "longitude": 90.0333,
    "latitude": 25.0333
  },
  {
    "region": "Chattogram",
    "district": "Bandarban",
    "city": "Bandarban",
    "covered_area": ["Bandarban Sadar", "Thanchi", "Lama", "Rowangchhari"],
    "status": "active",
    "flowchart": "https://example.com/bandarban-flowchart.png",
    "longitude": 92.2186,
    "latitude": 22.1958
  },
  {
    "region": "Khulna",
    "district": "Kushtia",
    "city": "Kushtia",
    "covered_area": [
      "Kushtia Sadar",
      "Kumarkhali",
      "Khoksa",
      "Mirpur",
      "Bheramara",
      "Daulatpur"
    ],
    "status": "active",
    "flowchart": "https://example.com/kushtia-flowchart.png",
    "longitude": 89.122,
    "latitude": 23.9013
  }
];

const SendParcel = () => {
  const { user } = useAuth();
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    defaultValues: {
      senderName: user?.displayName || "",
      senderEmail: user?.email || "",
      parcelType: "Document"
    }
  });

  const axiousSecure = useAxiosSecure();

  const [pricing, setPricing] = useState({ base: 0, weightExtra: 0, locationExtra: 0, total: 60 });

  const parcelType = watch("parcelType");
  const weight = watch("weight");
  const receiverDistrict = watch("receiverDistrict");
  const senderDistrict = watch("senderDistrict");

  const senderAreas = branchData.find(b => b.district === senderDistrict)?.covered_area || [];
  const receiverAreas = branchData.find(b => b.district === receiverDistrict)?.covered_area || [];

  // Calculate Price Dynamically
  useEffect(() => {
    let base = 0, weightExtra = 0, locationExtra = 0;
    if (parcelType === "Document") {
      base = 60;
    } else {
      base = 100;
      const w = parseFloat(weight) || 1;
      if (w > 1) weightExtra = (Math.ceil(w) - 1) * 50;
    }
    if (receiverDistrict && receiverDistrict !== "Dhaka") locationExtra = 50;

    setPricing({ base, weightExtra, locationExtra, total: base + weightExtra + locationExtra });
  }, [parcelType, weight, receiverDistrict]);

  // Handle Form Submission
  const onSubmit = async (data) => {
    const trackingId = `TRK-${Math.floor(Date.now() / 1000)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const bookingDate = new Date().toISOString();

    Swal.fire({
      title: '<span style="color: #052c2c">Review Your Booking</span>',
      html: `
                <div style="text-align: left; font-family: 'Urbanist', sans-serif;">
                    <div style="background: #f8f9fa; padding: 12px; border-radius: 12px; margin-bottom: 10px; border: 1px solid #eee;">
                        <p style="margin:0"><strong>Tracking ID:</strong> ${trackingId}</p>
                        <p style="margin:0"><strong>User Email:</strong> ${user?.email}</p>
                    </div>
                    <p><strong>To:</strong> ${data.receiverName} (${data.receiverPhone})</p>
                    <p><strong>Dest:</strong> ${data.receiverArea}, ${data.receiverDistrict}</p>
                    <hr style="margin: 10px 0; border-top: 1px dashed #ccc;">
                    <div style="display: flex; justify-content: space-between; font-weight: bold; color: #052c2c;">
                        <span>Total Payable:</span> <span style="font-size: 1.2em;">$${pricing.total}</span>
                    </div>
                </div>
            `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#bef264',
      cancelButtonColor: '#f3f4f6',
      confirmButtonText: '<span style="color: #052c2c; font-weight: bold;">Confirm & Save</span>',
      cancelButtonText: '<span style="color: #666;">Edit Details</span>',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        const finalParcel = {
          ...data,
          senderEmail: user?.email,
          deliveryCost: pricing.total,
          trackingId,
          bookingDate,
          status: "pending",
          paymentStatus: "unpaid"
        };

        try {
          // Update this URL to your production/local server endpoint
          // const response = await fetch('http://localhost:3000/api/parcels', {
          //     method: 'POST',
          //     headers: { 'Content-Type': 'application/json' },
          //     body: JSON.stringify(finalParcel)
          // });




          axiousSecure.post('/parcels', finalParcel)
            .then(res => {
              console.log(res.data);
              if (res.data.insertedId) {

                //Redirect for payment page

                Swal.fire({
                  title: 'Success!',
                  text: 'Your parcel has been booked and saved.',
                  icon: 'success',
                  confirmButtonColor: '#bef264'
                });
              }
            })

          // const resData = await response.json();

          // if (resData.insertedId) {
          //     Swal.fire({
          //         title: 'Success!',
          //         text: 'Your parcel has been booked and saved.',
          //         icon: 'success',
          //         confirmButtonColor: '#bef264'
          //     });
          //     reset(); // Resets form fields
          // } else {
          //     throw new Error("Failed to insert data");
          // }
        } catch (error) {
          console.error("Error saving parcel:", error);
          toast.error("Database Error: Could not save booking.");
        }
      }
    });
  };

  return (
    <section className="py-10 bg-gray-50 min-h-screen px-4 font-urbanist">
      <Toaster position="top-center" />

      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-sm p-8 md:p-16 border border-gray-100">
        <header className="mb-10">
          <h1 className="text-5xl font-bold text-[#052c2c] mb-2">Book A Parcel</h1>
          <p className="text-gray-500 italic">Logged in as: {user?.email}</p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">

          {/* SECTION 1: PARCEL DETAILS */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-[#052c2c]">1. Parcel Info</h3>
            <div className="flex gap-8 bg-gray-100 p-3 rounded-2xl w-fit">
              <label className="flex items-center gap-2 cursor-pointer font-bold">
                <input type="radio" value="Document" {...register("parcelType")} className="radio radio-success" />
                <span>Document</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-bold">
                <input type="radio" value="Not-Document" {...register("parcelType")} className="radio radio-success" />
                <span>Not-Document</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-bold text-xs text-gray-500">Parcel Title</label>
                <input type="text" {...register("parcelTitle", { required: true })} className="input input-bordered w-full rounded-xl" placeholder="e.g. Laptop" />
              </div>
              <div className="form-control">
                <label className="label font-bold text-xs text-gray-500">Weight (KG)</label>
                <input type="number" step="0.1" disabled={parcelType === "Document"} {...register("weight")} className="input input-bordered w-full rounded-xl disabled:bg-gray-200" placeholder="1.0" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* SENDER */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-bold text-[#052c2c] border-b pb-2">2. Sender</h3>
              <input type="text" {...register("senderName")} readOnly className="input input-bordered w-full rounded-xl bg-gray-50 font-bold" />
              <input type="tel" {...register("senderPhone", { required: true })} className="input input-bordered w-full rounded-xl" placeholder="Your Phone Number" />
              <div className="grid grid-cols-2 gap-4">
                <select {...register("senderDistrict", { required: true })} className="select select-bordered w-full rounded-xl">
                  <option value="">District</option>
                  {branchData.map((b, i) => <option key={i} value={b.district}>{b.district}</option>)}
                </select>
                <select {...register("senderArea", { required: true })} disabled={!senderAreas.length} className="select select-bordered w-full rounded-xl">
                  <option value="">Area</option>
                  {senderAreas.map((area, i) => <option key={i} value={area}>{area}</option>)}
                </select>
              </div>
              <input type="text" {...register("senderAddress", { required: true })} className="input input-bordered w-full rounded-xl" placeholder="Pickup Full Address" />
            </div>

            {/* RECEIVER */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-bold text-[#052c2c] border-b pb-2">3. Receiver</h3>
              <input type="text" {...register("receiverName", { required: true })} className="input input-bordered w-full rounded-xl" placeholder="Receiver Name" />
              <input type="tel" {...register("receiverPhone", { required: true })} className="input input-bordered w-full rounded-xl" placeholder="Receiver Phone" />
              <div className="grid grid-cols-2 gap-4">
                <select {...register("receiverDistrict", { required: true })} className="select select-bordered w-full rounded-xl">
                  <option value="">District</option>
                  {branchData.map((b, i) => <option key={i} value={b.district}>{b.district}</option>)}
                </select>
                <select {...register("receiverArea", { required: true })} disabled={!receiverAreas.length} className="select select-bordered w-full rounded-xl">
                  <option value="">Area</option>
                  {receiverAreas.map((area, i) => <option key={i} value={area}>{area}</option>)}
                </select>
              </div>
              <input type="text" {...register("receiverAddress", { required: true })} className="input input-bordered w-full rounded-xl" placeholder="Delivery Full Address" />
            </div>
          </div>

          {/* PRICE SUMMARY */}
          <div className="bg-[#052c2c] p-8 rounded-[32px] flex flex-col md:flex-row justify-between items-center text-white shadow-2xl">
            <div className="flex gap-10">
              <div>
                <p className="text-gray-400 text-xs uppercase mb-1">Total Fee</p>
                <p className="text-5xl font-black text-[#bef264]">${pricing.total}</p>
              </div>
            </div>
            <button type="submit" className="btn bg-[#bef264] hover:bg-white border-none text-[#052c2c] px-16 rounded-2xl h-16 text-xl font-black transition-all">
              Book Parcel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SendParcel;

