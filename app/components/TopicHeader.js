import React, { Component } from "react";

import {
  Image,
  Text,
  StyleSheet,
  View
} from "react-native";
import moment from "moment";

import { colors } from "../styles/common";

const zhLocale = require("moment/locale/zh-cn");

moment.locale("zh-cn", zhLocale);

class TopicHeader extends Component {
  render() {
    const topic = this.props.topic;
    const avatarUrl = `https://souka.io${topic.author.avatar_url}`;
    return (
      <View style={styles.topicHeader}>
        <View style={styles.topic}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{topic.title}</Text>
            <View style={styles.meta}>
              <Text style={styles.author}>{topic.author.name}</Text>
              <Text style={styles.sep}> • </Text>
              <Text style={styles.timestamp}>{moment(topic.created_at).fromNow()}发布</Text>
            </View>

          </View>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
        </View>
        <Text style={styles.content}>{topic.content}</Text>
        <Text style={styles.postHeader}>{topic.num_posts}回复 | 最后更新{moment(topic.created_at).fromNow()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topicHeader: {
    backgroundColor: "#fbfbfb",
    padding: 15,
  },
  topic: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    color: colors.textColor,
    marginBottom: 5,
  },
  content: {
    color: colors.textColor,
    marginBottom: 20
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 15
  },
  meta: {
    flexDirection: "row",
  },
  author: {
    color: colors.mute,
    fontSize: 12
  },
  sep: {
    color: colors.mute,
    fontSize: 12
  },
  timestamp: {
    color: colors.mute,
    fontSize: 12
  },
  postHeader: {
    fontSize: 12,
    color: colors.mute
  }
});
export default TopicHeader;
