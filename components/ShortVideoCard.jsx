import { View, Text, Image } from 'react-native'
import { FiMoreVertical } from "react-icons/fi";
import tw from 'twrnc'

export default function ShortVideoCard({video}) {

    const {id, title, viewCount, img} = video

  return (
    <View style={tw`relative h-64 w-40 mr-3 justify-between`}>
      <Image source={img} style={tw`rounded-xl absolute w-full h-full`} />
      <View style={tw`flex-row justify-end pr-1 pt-3`}>
        <FiMoreVertical color='white' />
      </View>
      <View style={tw`p-2`}>
        <Text style={tw`text-white shadow-lg font-bold text-sm`}>
            {title}
        </Text>
        <Text style={tw`text-white shadow-md font-extrabold text-xs`}>
            {viewCount} views
        </Text>
      </View>
    </View>
  )
}