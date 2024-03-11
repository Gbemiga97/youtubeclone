import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { FaChromecast } from "react-icons/fa6";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { data } from '../utils';
import { useState } from 'react';
import ShortVideoCard from '../components/ShortVideoCard';
import VideoCard from '../components/VideoCard';



export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <View style={tw`bg-[#212121] flex-1`}> 
    {/* logo and profile icon */}
      <SafeAreaView style={tw`flex-row justify-between items-center mx-4 pt-6`}>
        <View style={tw`flex-row items-center gap-x-1 pb-4`}>
            <Image source={'../assets/icons/youtubeIcon.png'} style={tw`h-7 w-10`} /> 
            <Text style={tw`text-white font-semibold text-xl tracking-tight`}>
                Youtube</Text>
        </View>
        <View style={tw`flex-row items-center gap-x-3`}>
          <FaChromecast color='white' size='28' strokeWidth={1.8} height="22" />
          <IoNotificationsOutline color='white' size='28' strokeWidth={1.8} height="22"  />
          <IoSearchOutline color='white' size='28' strokeWidth={1.8} height="22"  />
          <Image source={'../assets/images/avatar.png'} style={tw`h-7 w-7 rounded-full`} />
        </View>
      </SafeAreaView>

      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        {/* categories */}
        <View style={tw`py-6 pb-5`}>
        <ScrollView style={tw`px-4`} horizontal showsHorizontalScrollIndicator={false}>
          {
            data.categories.map((category, i) => (
              <TouchableOpacity
              onPress={() => setActiveCategory(category)}
              key={i} style={tw`${activeCategory === category ? 'bg-white' : 'bg-[rgba(255,255,255,0.1)]'} rounded-md p-1 px-3 mr-2`}>
                <Text style={tw`${activeCategory === category ? 'text-black' : 'text-white'}`}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))
          }
          </ScrollView>
        </View>


        {/* suggested video */}
        <VideoCard  video={data.videos[4]} />

        {/* short videos */}
        <View style={tw`mt-2 py-5 gap-y-3 border-t-zinc-700  border-b-zinc-700 border-4 border-l-0 border-r-0 `}>
          <View style={tw`mx-4 flex-row items-center gap-x-2`}>
            <Image source={'../assets/icons/shortsIcon.png'} style={tw`h-6 w-5`} />
            <Text style={tw`text-white font-semibold text-lg tracking-tighter`}>
              Shorts
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`px-4`}>
            {
              data.shortVideos.map((video, i) => <ShortVideoCard key={i} video={video} />)
            }
          </ScrollView>
        </View>

        {/* videos */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            data.videos.map((video, i) => <VideoCard key={i} video={video} />)
          }
        </ScrollView>
      </ScrollView>
    </View>
  )
}