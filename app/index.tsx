import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Search, Bell, ChevronRight, Settings, ShoppingCart, CreditCard, Umbrella, BarChart3, FileText, Car, Train, Phone, PowerIcon, Mic2,  Laptop, Currency,  Banknote, BanknoteXIcon, Star, Link, Medal, Tractor, QrCode } from 'lucide-react-native';
const logo = require('../assets/images/logo.jpg');
const ad = require('../assets/images/ad.jpg');

const { width } = Dimensions.get('window');

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-3 bg-white shadow-lg mb-4">
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-2">
              <View className="w-6 h-0.5 bg-purple-300 mb-1"></View>
              <View className="w-6 h-0.5 bg-purple-300 mb-1"></View>
              <View className="w-6 h-0.5 bg-purple-300"></View>
            </TouchableOpacity>
          </View>
          <Image
            source={logo}
            resizeMode='contain'
            className='w-[160px] h-[25px]'
            alt='logo'
          />
          <View className="flex-row">
            <TouchableOpacity className="mr-4">
              <Phone color="#d8b4fe" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <PowerIcon color="#d8b4fe" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View className='flex-row items-center justify-center w-full gap-2'>
          {/* Search Bar */}
          <View className="px-2 py-1 bg-white mb-4 rounded-3xl w-[75%]">
            <View className="flex-row items-center bg-gray-white rounded-lg px-3">
              <TextInput
                className="flex-1 text-gray-800 pl-2"
                placeholder="Search"
                placeholderTextColor="gray"
              />
              <Search color="gray" size={20} />
            </View>
          </View>

          {/* Chatbot button */}
          <TouchableOpacity className="bg-white flex-col justify-center items-center w-[20%] rounded-3xl p-2 mb-4 ">
            <View className="bg-purple-600 rounded-full w-6 h-6 items-center justify-center">
              <Mic2 color="#d8b4fe" size={12} />
            </View>
            <Text className="text-xs text-center text-gray-600">Chatbot</Text>
          </TouchableOpacity>
        </View>

        {/* Main Menu Grid */}
        <View className="flex-row flex-wrap justify-between px-2 py-2 bg-white">
          {/* Accounts */}
          <TouchableOpacity className="w-1/4 items-center p-3 border-r-2 border-gray-300 mb-4">
            <View className=" p-2 rounded-lg ">
              <CreditCard color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">Accounts</Text>
          </TouchableOpacity>

          {/* Deposits */}
          <TouchableOpacity className="w-1/4 items-center p-3 border-r-2 border-gray-300 mb-4">
            <View className="p-2 rounded-lg">
              <BanknoteXIcon color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">Deposits</Text>
          </TouchableOpacity>

          {/* Loans */}
          <TouchableOpacity className="w-1/4 items-center p-3 border-r-2 border-gray-300 mb-4">
            <View className=" p-2 rounded-lg mb-1">
              <Banknote color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">Loans</Text>
          </TouchableOpacity>

          {/* Investments */}
          <TouchableOpacity className="w-1/4 items-center p-3 mb-4">
            <View className=" p-2 rounded-lg mb-1">
              <BarChart3 color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">Investments</Text>
          </TouchableOpacity>

          {/* Insurance */}
          <TouchableOpacity className="w-1/4 items-center p-3 border-r-2 border-gray-300">
            <View className="w-20 h-0.5 bg-gray-300 -mt-4"></View>
            <View className=" p-2 rounded-lg mb-1">
              <Umbrella color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">Insurance</Text>
          </TouchableOpacity>

          {/* Cards */}
          <TouchableOpacity className="w-1/4 items-center p-3 border-r-2 border-gray-300">
            <View className="w-20 h-0.5 bg-gray-300 -mt-4"></View>
            <View className=" p-2 rounded-lg mb-1">
              <CreditCard color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">Cards</Text>
          </TouchableOpacity>

          {/* YONO Pay */}
          <TouchableOpacity className="w-1/4 items-center p-3 border-r-2 border-gray-300">
            <View className="w-20 h-0.5 bg-gray-300 -mt-4"></View>
            <View className=" p-2 rounded-lg mb-1">
              <Currency color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">YONO Pay</Text>
          </TouchableOpacity>

          {/* YONO Cash */}
          <TouchableOpacity className="w-1/4 items-center p-3">
            <View className="w-20 h-0.5 bg-gray-300 -mt-4"></View>
            <View className=" p-2 rounded-lg mb-1">
              <Laptop color="#d8b4fe" size={38} />
            </View>
            <Text className="text-sm text-center text-gray-700">YONO Cash</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal Scrollable Cards */}
        <View className="my-3">
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingStart: 16, paddingEnd: 16 }}
          >
            {/* First Card */}
            <View className="bg-gray-50 rounded-xl shadow-sm mr-4" style={{ width: width * 0.8 }}>
              <View className="flex-row p-4 gap-4">
                <Image 
                  source={ad}
                  className="w-20 h-20"
                />
                <View className="flex-1">
                  <Text className="font-bold text-gray-800">Congrats! You are eligible for Life Cover</Text>
                  <Text className="text-gray-700 text-sm">upto ₹700000. Get Policy Instantly without Medical test or Documentation.</Text>
                  <TouchableOpacity className="mt-2">
                    <Text className="text-gray-600 font-semibold">Tap here to Avail Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Second Card */}
            <View className="bg-gray-50 rounded-xl shadow-sm mr-4" style={{ width: width * 0.8 }}>
              <View className="flex-row p-4 gap-4">
                <Image 
                  source={ad}
                  className="w-20 h-20"
                />
                <View className="flex-1">
                  <Text className="font-bold text-gray-800">Congrats! You are eligible for Life Cover</Text>
                  <Text className="text-gray-700 text-sm">upto ₹700000. Get Policy Instantly without Medical test or Documentation.</Text>
                  <TouchableOpacity className="mt-2">
                    <Text className="text-gray-600 font-semibold">Tap here to Avail Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Third Card (Optional) */}
            <View className="bg-gray-50 rounded-xl shadow-sm" style={{ width: width * 0.8 }}>
              <View className="flex-row p-4 gap-4">
                <Image 
                  source={ad}
                  className="w-20 h-20"
                />
                <View className="flex-1">
                  <Text className="font-bold text-gray-800">Congrats! You are eligible for Life Cover</Text>
                  <Text className="text-gray-700 text-sm">upto ₹700000. Get Policy Instantly without Medical test or Documentation.</Text>
                  <TouchableOpacity className="mt-2">
                    <Text className="text-gray-600 font-semibold">Tap here to Avail Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Second Row Menu */}
        <View className="flex-row justify-between px-1 pt-2 gap-2">
          {/* Shop & Order */}
          <TouchableOpacity className="w-1/4 items-center p-2 bg-white rounded-lg shadow-md border border-purple-300">
            <View className=" rounded-lg mb-1">
              <ShoppingCart color="#d8b4fe" size={30} />
            </View>
            <Text className="text-sm text-center text-gray-700">Shop & Order</Text>
          </TouchableOpacity>

          {/* Bill Payment */}
          <TouchableOpacity className="w-1/4 items-center p-2 bg-white rounded-lg shadow-md border border-purple-300 ">
            <View className=" rounded-lg mb-1">
              <FileText color="#d8b4fe" size={30} />
            </View>
            <Text className="text-sm text-center text-gray-700">Bill Payment</Text>
          </TouchableOpacity>

          {/* Mobility */}
          <TouchableOpacity className="w-1/4 items-center p-2 bg-white rounded-lg shadow-md border border-purple-300">
            <View className=" rounded-lg mb-1">
              <Car color="#d8b4fe" size={30} />
            </View>
            <Text className="text-sm text-center text-gray-700">Mobility</Text>
          </TouchableOpacity>

          {/* Train Ticket */}
          <TouchableOpacity className="w-1/4 items-center p-2 bg-white rounded-lg shadow-md border border-purple-300">
            <View className="rounded-lg mb-1">
              <Train color="#d8b4fe" size={30} />
            </View>
            <Text className="text-sm text-center text-gray-700">Train Ticket</Text>
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center justify-center w-full gap-2 mt-2 px-2'>
          {/* YONO KRISHI */}
          <View className="bg-white rounded-xl shadow-sm w-1/2 border border-purple-300 p-6 h-32">
            <View className="flex-row justify-between items-center text-center gap-4">
              <View className='flex-col gap-2 justify-center items-center'>
                <Tractor color="#d8b4fe" size={38} />
                <Text className="font-bold text-gray-500">YONO KRISHI</Text>
              </View>
              <View className='flex-col'>
                <Text className='text-xs text-gray-500'>खेती सुविधा</Text>
                <Text className='text-xs text-gray-500'>खेती कीसुविधा</Text>
                <Text className='text-xs text-gray-500'>खेती की सुविधा </Text>
                <Text className='text-xs text-gray-500'>खेती कीसुवि</Text>
                <TouchableOpacity>
                  <Text className="text-purple-300 text-sm">+8 More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* JanNivesh SIP Banner */}
          <View className=" bg-white rounded-xl shadow-sm w-1/2 flex-col h-32 justify-center items-center p-2 border border-purple-300">
            <View className= "bg-green-500 rounded p-0.5 w-10 flex-row items-end justify-center ml-36 ">
              <Text className="text-white text-sm">New</Text>
            </View>
            <View className='flex-col justify-between items-center text-center'>
              <View className='flex-row items-center justify-center'>
                <View className="w-8 h-0.5 bg-purple-300 mr-1"></View>
                <Text className='text-purple-300 text-sm'>SIBI Mutual Fund</Text>
                <View className="w-8 h-0.5 bg-purple-300 ml-1"></View>
              </View>
              <Text className="font-bold text-2xl text-purple-600 underline">JanNivesh <Text className='bg-purple-500 text-white'>SIP</Text></Text>
              <Text className="text-purple-300 text-base">Jan Jan ka nivesh</Text>
              <Text className="text-gray-500 text-lg font-semibold">SIP starting at₹ 250</Text>
            </View>
          </View>
        </View>

        {/* Car Ad Banner */}
        <View className="mx-4 my-3 bg-white rounded-xl overflow-hidden shadow-sm">
          <Image 
            source={{ uri: '/api/placeholder/360/140' }}
            className="w-full h-36"
          />
          <View className="absolute bottom-0 left-0 right-0 bg-blue-700 p-3">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Image 
                  source={ad}
                  className=""
                />
              </View>
            </View>
          </View>
          <View className="absolute bottom-1 left-0 right-0 p-3">
            <Text className="text-white text-xs">For assistance, call 1800 123456 • www.bank.com</Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed QR Code Button */}
      <View className="absolute bottom-20 right-4 bg-white rounded-2xl p-2 shadow-lg z-10">
        <TouchableOpacity className="flex-row items-center justify-between gap-2">
          <Text className="text-gray-700">Scan QR</Text>
          <QrCode color="#d8b4fe" size={25} />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row justify-between items-center px-4 py-3 bg-white border-t border-gray-200 shadow-lg">
        <TouchableOpacity className="items-center">
          <Settings color="#d8b4fe" size={30} />
          <Text className="text-sm text-gray-600 mt-1">Service Request</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <Medal color="#d8b4fe" size={30} />
          <Text className="text-sm text-gray-600 mt-1">SBI Reward</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center border border-purple-300 bg-white rounded-full -mt-14">
          <View className=" w-12 h-12 items-center justify-center">
            <ChevronRight color="#d8b4fe" size={24} />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <Star color="#d8b4fe" size={30} />
          <Text className="text-sm text-gray-600 mt-1">Best Offers</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <Link color="#d8b4fe" size={30} />
          <Text className="text-sm text-gray-600 mt-1">Quick Links</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
