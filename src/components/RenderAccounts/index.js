import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import Account from "../Account";
import NotFound from "../NotFound";

export default function RenderAccounts() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    getAccounts()
  }, [])

  const getAccounts = async () => {
    try {
      const response = await fetch("http://SEUIPV4:3000/account/find")
      const json = await response.json()
      setLoading(false)

      setData(json)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      {data && 
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={Account}
        ListEmptyComponent={<NotFound/>}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={getAccounts}/>}
      />}
    </>
  )
}