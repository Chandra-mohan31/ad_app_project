import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,TouchableOpacity } from "react-native"

export default function FindDonors({navigation}) {
  return (
    <View style={styles.FindDonors}>
      <View style={styles.Group1089}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image
          style={styles.BackArrow}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1402?alt=media&token=569a5eec-43fd-4667-b338-1dc00346b7a0",
          }}
        />
  </TouchableOpacity>
        
        <Text style={styles.Txt272}>Find Donors</Text>
      </View>
      <View style={styles.Group577}>
        <Text style={styles.Txt533}>Krithik Ram</Text>
        <View style={styles.Location}>
          <Image
            style={styles.MapPin}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1521?alt=media&token=4ae04684-a12a-45fb-8b18-c842795a1b1e",
            }}
          />
          <Text style={styles.Txt843}>Erode, Tamil Nadu</Text>
        </View>
        <View style={styles.Group52}>
          <Image
            style={styles.Group33}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1525?alt=media&token=e2e8e572-314a-4a26-bbe0-6242cdf8e85a",
            }}
          />
          <View style={styles.Group1089}>
            <Text style={styles.multiple1}>6 Times Donated</Text>
            <Text style={styles.multiple2}>Blood Type - B+</Text>
          </View>
        </View>
        <View style={styles.Group36}>
          <View style={styles.Call}>
            <View style={styles.Group1089}>
              <Image
                style={styles.FluentPersonCall20Regular}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1537?alt=media&token=805ea8b3-acc8-490c-a65a-7ca6a3946f76",
                }}
              />
              <Text style={styles.Txt385}>Call Now</Text>
            </View>
          </View>
          <View style={styles.Request}>
            <View style={styles.Group34}>
              <View style={styles.Group1089}>
                <Image
                  style={styles.SimpleLineIconsActionUndo}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1548?alt=media&token=aaff8de0-92d6-4b43-ab0f-42761fcf8005",
                  }}
                />
                <Text style={styles.Txt385}>Request</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Group595}>
          <Image
            style={styles.LocaationIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1551?alt=media&token=eb3310fa-98cb-493e-8f19-2f69baef282b",
            }}
          />
        </View>
      </View>
      <View style={styles.Group24}></View>
      <Image
        style={styles.Person_outline}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1516?alt=media&token=642a4980-e792-4d11-b246-6be3a7cfeb3c",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  FindDonors: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // position: "relative",
    paddingTop: 37,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(220,220,220,1)",
    width: 414,
    height: 896,
  },
  Group1089: {
    display: "flex",
    flexDirection: "row",
  },
  BackArrow: {
    width: 44,
    height: 44,
    marginRight: 49,
  },
  Txt272: {
    fontSize: 22,
    
    fontWeight: "500",
    letterSpacing: 0.44,
    color: "rgba(39,42,47,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 190,
    height: 35,
  },

  Group577: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 238,
    none: "0px",
    paddingTop: 11,
    paddingBottom: 104,
    paddingLeft: 19,
    paddingRight: 19,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(77,77,77,0.25)",
    elevation: 5,
    shadowOffset: { width: 0, height: 0 },
    width: 414,
    height: 716,
  },
  Txt533: {
    fontSize: 22,
    
    fontWeight: "500",
    letterSpacing: 0.44,
    color: "rgba(39,42,47,1)",
    width: 139,
    height: 39,
    marginBottom: 10,
  },
  Location: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 29,
  },
  MapPin: {
    width: 18,
    height: 18,
    marginRight: 7,
  },
  Txt843: {
    fontSize: 14,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 134,
    height: 21,
  },

  Group52: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 47,
  },
  Group33: {
    width: 251,
    height: 37,
    marginBottom: 10,
  },
  Group1089: {
    display: "flex",
    flexDirection: "row",
  },
  multiple1: {
    main: "Txt3310",
    seg1: "[object Object]",
    seg2: "[object Object]",
    seg3: "[object Object]",
  },
  multiple2: {
    main: "Txt2710",
    seg1: "[object Object]",
    seg2: "[object Object]",
  },

  Group36: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 50,
  },
  Call: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 21,
    paddingRight: 21,
    marginRight: 33,
    borderRadius: 10,
    backgroundColor: "rgba(104,149,147,1)",
    width: 158,
    height: 52,
  },
  Group1089: {
    display: "flex",
    flexDirection: "row",
  },
  FluentPersonCall20Regular: {
    width: 26,
    height: 26,
    marginRight: 17,
  },
  Txt385: {
    fontSize: 16,
    
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 72,
    height: 25,
  },

  Request: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 21,
    paddingRight: 21,
    borderRadius: 10,
    backgroundColor: "rgba(255,33,86,1)",
    width: 158,
    height: 52,
  },
  Group34: {
    width: 114,
    height: 24,
  },
  Group1089: {
    display: "flex",
    flexDirection: "row",
  },
  SimpleLineIconsActionUndo: {
    width: 25.14,
    height: 22,
    marginRight: 18,
  },
  Txt385: {
    fontSize: 16,
    
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 72,
    height: 25,
  },

  Group595: {
    paddingTop: 27,
    paddingBottom: 107,
    paddingLeft: 92,
    paddingRight: 139,
    borderRadius: 10,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1550?alt=media&token=a2021781-847f-428e-802c-9b8d109cbbf0) */
    width: 374,
    height: 277,
  },
  LocaationIcon: {
    width: 141,
    height: 141,
  },

  Group24: {
    position: "absolute",
    top: 115,
    left: 142,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 130,
    height: 130,
  },

  Person_outline: {
    position: "absolute",
    top: 128,
    left: 166,
    width: 82,
    height: 87,
  },
})
