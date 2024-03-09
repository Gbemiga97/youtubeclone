import { View, Text, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc'


export default function HomeScreen() {
  return (
    <View style={tw`bg-[#212121] flex-1`}> 
      <SafeAreaView style={tw`flex-row justify-between mx-4 pt-6`}>
        <View style={tw`flex-row items-center gap-x-1`}>
            <Image source={'../assets/icons/youtubeIcon.png'} style={tw`h-7 w-10`} /> 
            <Text style={tw`text-white font-semibold text-xl tracking-tight`}>
                Youtube</Text>
        </View>
        <View>

        </View>
      </SafeAreaView>
    </View>
  )
}