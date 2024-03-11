import { FiMoreVertical } from 'react-icons/fi'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'


export default function VideoCard({video}) {

    const {id, viewCount, avatar, thumbnail, channelTitle, title, duration, publishedText} = video

  return (
    <View>
      <Image source={thumbnail} style={tw`h-52 w-full`} />
      <View style={tw`flex items-end mr-2 mb-5 -mt-6`}>
        <View style={tw`bg-black rounded px-1`}>
            <Text style={tw`text-white font-semibold text-xs`}>
                {duration}
            </Text>
        </View>
      </View>
      <View style={tw`flex-row justify-between items-center pb-5 gap-x-3 mx-2`}>
        <Image source={avatar} style={tw`h-9 w-9 rounded-full`} />
        <View style={tw`flex-1 gap-y-1`}>
            <Text style={tw`text-white font-semibold`}>
                {title}
            </Text>
            <Text style={tw`text-zinc-400 text-xs`}>
                {channelTitle} • {viewCount} views • {publishedText}
            </Text>
        </View>
        <View style={tw`self-start`}>
        <FiMoreVertical color='white' />
      </View>
      </View>
    </View>
  )
}