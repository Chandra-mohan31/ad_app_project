import React from "react"
import { StyleSheet, Image, Text, View,ScrollView, ImageBackground ,Button,TouchableOpacity} from "react-native"
// import {MenuUnfoldOutlined} from "@ant-design/icons";
// import MenuUnfoldedOutlined from "react-native-vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
export default function HomePage({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly"
    }}>
    <Ionicons name="add-circle" size={30} color="green" />
    <Text>hi</Text>
    </View>
    
    <View style={styles.HomePage}>
      <View style={styles.Group7510}>
        <View style={styles.Group574}>
          <Image
            style={styles.Rectangle13}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A207?alt=media&token=8316de2f-a501-489d-a6e8-223a8778d2ab",
            }}
          />
          <View style={styles.Group20}>
            <View style={styles.Group18}>
              <View style={styles.Ellipse2} />
              <View style={styles.Ellipse3} />
              <View style={styles.Ellipse4} />
              <View style={styles.Ellipse5} />
            </View>
          </View>
          <View style={styles.Group052}>
          <TouchableOpacity onPress={()=>navigation.push('FindDonarsList')}>
            <View style={styles.FindDonors}>
              <Image
                style={styles.IonSearchOutline}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A216?alt=media&token=06133666-94a5-436b-ae08-896b16dbb30c",
                }}
              />
              <Text style={styles.Txt272}>Find Donors</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.Donates}>
              <Image
                style={styles.OpenmojiBloodTransfusion}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A225?alt=media&token=fb1c4406-a319-4cc3-97a3-e1ad32413773",
                }}
              />
              <Text style={styles.Txt272}>Donates</Text>
            </View>
            <View style={styles.OrderBloods}>
              <Image
                style={styles.SiGlyphBloodBag}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A243?alt=media&token=e2a04c2d-0729-4988-bc8a-3ffc4bc8ad03",
                }}
              />
              <Text style={styles.Txt247}>Request Blood</Text>
            </View>
          </View>
          <View style={styles.Group391}>
            <View style={styles.Assistant}>
              <Image
                style={styles.MakiDoctor11}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A249?alt=media&token=269aa9bc-6b23-4eae-9afa-1f3eac895868",
                }}
              />
              <Text style={styles.Txt272}>Assistant</Text>
            </View>
            <View style={styles.Report}>
              <Image
                style={styles.LaFileMedicalAlt}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A254?alt=media&token=80744ce9-6c61-420c-8bee-c43a39906c29",
                }}
              />
              <Text style={styles.Txt272}>Report</Text>
            </View>
            <View style={styles.Campaign}>
              <Image
                style={styles.MakiDoctor11}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A260?alt=media&token=555978c7-2d76-4bec-8d90-5d5a3aee40b6",
                }}
              />
              <Text style={styles.Txt272}>Campaign</Text>
            </View>
          </View>
          <Text style={styles.Txt1051}>Donation Request</Text>
        </View>
        <View style={styles.Group201}>
          <View style={styles.Group18}>
            <View style={styles.Ellipse2} />
            <View style={styles.Ellipse3} />
            <View style={styles.Ellipse4} />
            <View style={styles.Ellipse5} />
          </View>
        </View>
      </View>
      <View style={styles.DonationPost}>
        <View style={styles.Group797}>
          <View style={styles.Group288}>
            <View style={styles.Name}>
              <Text style={styles.Txt838}>Name</Text>
              <Text style={styles.Txt229}>Krishna Prasath</Text>
            </View>
            <View style={styles.Group574}>
              <Text style={styles.Txt565}>Location</Text>
              <Text style={styles.Txt284}>KMCH Hospital, Coimbatore</Text>
            </View>
          </View>
          <View style={styles.BloodGroup}>
            <Text style={styles.Txt1002}>B+</Text>
          </View>
        </View>
        <View style={styles.Group18}>
          <Text style={styles.Txt5106}>5 Min Ago</Text>
          <Text style={styles.Txt695}>Donate</Text>
        </View>
      </View>
      <View style={styles.Group979}>
        <View style={styles.Group654}>
          <View style={styles.Group18}>
            <Image
              style={styles.FluentHome16Regular}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A273?alt=media&token=61533370-76b7-4975-92f8-06e6cd61eccc",
              }}
            />
            <View style={styles.Group125}>
              <Image
                style={styles.Search}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A281?alt=media&token=3a053d3e-2613-419a-9d5d-e2964fc528e2",
                }}
              />
              <Text style={styles.Txt863}>Search</Text>
            </View>
            <View style={styles.Group1014}>
              <Image
                style={styles.FeLineChart}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A276?alt=media&token=5a158fee-6e49-4a5c-b389-86be4f4e1363",
                }}
              />
              <Text style={styles.Txt276}>Request</Text>
            </View>
            <View style={styles.Group574}>
              <Image
                style={styles.Search}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A278?alt=media&token=d418d30e-8d4a-453a-9ce9-3c0fe5d6e905",
                }}
              />
              <Text style={styles.Txt276}>Profile</Text>
            </View>
          </View>
          <View style={styles.Ellipse7} />
        </View>
      </View>
      <Image
        style={styles.BloodDrop}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A268?alt=media&token=13d3151e-7d55-41d5-aac1-b1562765e6eb",
        }}
      />
    </View>
    {/* <Button title="Find Donars"onPress={() => navigation.push('FindDonars')}></Button> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  HomePage: {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",

    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // position: "relative",
    paddingTop: 33,
    paddingBottom: 8,
    paddingLeft: 19,
    paddingRight: 17,
    backgroundColor: "rgba(255, 255, 255, 1)",
    
  },
  scrollView: {
    height: 1000
  },
  Group7510: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Group574: {
    display: "flex",
    flexDirection: "column",
  },
  Rectangle13: {
    width: 374,
    height: 179,
    marginBottom: 24,
  },
  Group20: {
    marginBottom: 28,
    width: 70,
    height: 10,
  },
  Group18: {
    display: "flex",
    flexDirection: "row",
  },
  Ellipse2: {
    backgroundColor: "rgba(255,33,86,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  Ellipse3: {
    backgroundColor: "rgba(224,224,224,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  Ellipse4: {
    backgroundColor: "rgba(224,224,224,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  Ellipse5: {
    backgroundColor: "rgba(224,224,224,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  Group052: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },
  FindDonors: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 7,
    paddingRight: 6,
    marginRight: 21,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(66,66,66,0.1)",
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
  },
  IonSearchOutline: {
    width: 43,
    height: 43,
    marginBottom: 15,
  },
  Txt272: {
    fontSize: 14,
    // 
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 96,
    height: 26,
  },

  Donates: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    paddingLeft: 7,
    paddingRight: 6,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(66,66,66,0.1)",
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
  },
  OpenmojiBloodTransfusion: {
    width: 52,
    height: 52,
    marginBottom: 13,
  },
  Txt272: {
    fontSize: 14,
    // 
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 96,
    height: 26,
  },

  OrderBloods: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 7,
    paddingRight: 0,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(66,66,66,0.1)",
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
  },
  SiGlyphBloodBag: {
    width: 40.38,
    height: 38,
    marginBottom: 20,
  },
  Txt247: {
    fontSize: 13,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 102,
    height: 26,
  },

  Group391: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 35,
  },
  Assistant: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 9,
    paddingLeft: 7,
    paddingRight: 6,
    marginRight: 21,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(66,66,66,0.1)",
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
  },
  MakiDoctor11: {
    width: 40,
    height: 40,
    marginBottom: 17,
  },
  Txt272: {
    fontSize: 14,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 96,
    height: 26,
  },

  Report: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 19,
    paddingBottom: 9,
    paddingLeft: 7,
    paddingRight: 6,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(66,66,66,0.1)",
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
  },
  LaFileMedicalAlt: {
    width: 40,
    height: 40,
    marginBottom: 15,
  },
  Txt272: {
    fontSize: 14,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 96,
    height: 26,
  },

  Campaign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 9,
    paddingLeft: 7,
    paddingRight: 6,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(66,66,66,0.1)",
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
  },
  MakiDoctor11: {
    width: 40,
    height: 40,
    marginBottom: 17,
  },
  Txt272: {
    fontSize: 14,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 96,
    height: 26,
  },

  Txt1051: {
    fontSize: 17,
    
    fontWeight: "500",
    letterSpacing: 1.19,
    color: "rgba(39,42,47,1)",
    width: 204,
    height: 29,
  },

  Group201: {
    width: 70,
    height: 10,
  },
  Group18: {
    display: "flex",
    flexDirection: "row",
  },
  Ellipse2: {
    backgroundColor: "rgba(255,33,86,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  Ellipse3: {
    backgroundColor: "rgba(224,224,224,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  Ellipse4: {
    backgroundColor: "rgba(224,224,224,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  Ellipse5: {
    backgroundColor: "rgba(224,224,224,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  DonationPost: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 676,
    left: 20,
    paddingTop: 9,
    paddingBottom: 4,
    paddingLeft: 23,
    paddingRight: 14,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(30,30,30,0.08)",
    elevation: 5,
    shadowOffset: { width: 0, height: 0 },
    width: 374,
    height: 146,
  },
  Group797: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  Group288: {
    display: "flex",
    flexDirection: "column",
    marginRight: 77,
  },
  Name: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 8,
  },
  Txt838: {
    fontSize: 14,
    
    fontWeight: "400",
    letterSpacing: 0.84,
    color: "rgba(126,126,126,1)",
    width: 64,
    height: 21,
    marginBottom: 1,
  },
  Txt229: {
    fontSize: 14,
    
    fontWeight: "500",
    letterSpacing: 0.7,
    color: "rgba(39,42,47,1)",
    width: 135,
    height: 21,
  },

  Group574: {
    display: "flex",
    flexDirection: "column",
  },
  Txt565: {
    fontSize: 14,
    
    fontWeight: "400",
    letterSpacing: 0.84,
    color: "rgba(126,126,126,1)",
    width: 72,
    height: 21,
    marginBottom: 1,
  },
  Txt284: {
    fontSize: 14,
    
    fontWeight: "500",
    letterSpacing: 0.7,
    color: "rgba(39,42,47,1)",
    width: 219,
    height: 21,
  },

  BloodGroup: {
    paddingTop: 18.5,
    paddingBottom: 0,
    paddingLeft: 1.5,
    paddingRight: 0,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255,33,86,1), rgba(255,33,86,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A296?alt=media&token=4aef41e5-d897-45ca-80a3-8bf6075e3b39) */
    width: 38,
    height: 55,
  },
  Txt1002: {
    fontSize: 22,
    
    fontWeight: "500",
    letterSpacing: -1.87,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 36,
    height: 35,
  },

  Group18: {
    display: "flex",
    flexDirection: "row",
  },
  Txt5106: {
    fontSize: 13,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 74,
    height: 21,
    marginRight: 187,
  },
  Txt695: {
    fontSize: 18,
    
    fontWeight: "500",
    letterSpacing: 0.81,
    color: "rgba(255,33,86,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 74,
    height: 29,
  },

  Group979: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 832,
    none: "0px",
    paddingTop: 10,
    paddingBottom: 6,
    paddingLeft: 17,
    paddingRight: 5,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7989lb2kah5-24%3A265?alt=media&token=6615ce69-cea5-4dda-ab48-bd88642b06cd) */
    width: 374,
    height: 55,
  },
  Group654: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Group18: {
    display: "flex",
    flexDirection: "row",
  },
  FluentHome16Regular: {
    width: 24,
    height: 24,
    marginRight: 48,
  },
  Group125: {
    display: "flex",
    flexDirection: "column",
    marginRight: 113,
  },
  Search: {
    width: 24,
    height: 24,
  },
  Txt863: {
    fontSize: 10,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 39,
    height: 13,
  },

  Group1014: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: 40,
  },
  FeLineChart: {
    width: 24,
    height: 24,
    marginBottom: 1,
  },
  Txt276: {
    fontSize: 10,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 44,
    height: 13,
  },

  Group574: {
    display: "flex",
    flexDirection: "column",
  },
  Search: {
    width: 24,
    height: 24,
  },
  Txt276: {
    fontSize: 10,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 44,
    height: 13,
  },

  Ellipse7: {
    backgroundColor: "rgba(255,33,86,1)",
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },

  BloodDrop: {
    position: "absolute",
    top: 807,
    left: 183,
    width: 48,
    height: 48,
  },
})
