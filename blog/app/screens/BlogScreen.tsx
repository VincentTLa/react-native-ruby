import React, { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { getPosts } from "../api/blogAPI"
import BlogPost from "../components/BlogPost"

export function BlogScreen() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts().then(posts => setPosts(posts))
  }, [])

  return (
    <ScrollView>
      <SafeAreaView>
        {posts &&
          posts.map((post: any) => (
            <View key={post.id}>
              <BlogPost title={post.title} body={post.body} />
            </View>
          ))}
      </SafeAreaView>
    </ScrollView>
  )
}
