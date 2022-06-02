import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground ,TouchableOpacity} from "react-native"

export default function FindDonors({navigation}) {
  return (
    <View style={styles.FindDonors}>
      <View style={styles.Group621}>
        <View style={styles.Group742}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image
          style={styles.BackArrow}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9ntntqn2ef6-24%3A1402?alt=media&token=569a5eec-43fd-4667-b338-1dc00346b7a0",
          }}
        />
  </TouchableOpacity>
          <Text style={styles.Txt566}>Find Donors</Text>
        </View>
        <View style={styles.Group541}>
          <View style={styles.Group1026}>
            <Image
              style={styles.Search}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A564?alt=media&token=fdd6f30e-79be-46d6-b83b-c30ddc8455e9",
              }}
            />
            <Text style={styles.Txt147}>Search </Text>
          </View>
          <View style={styles.Group2910}>
            <View style={styles.Group25}>
              <View style={styles.Ellipse12} />
              <View style={styles.Ellipse11} />
              <View style={styles.Group637}>
                <View style={styles.Rectangle31} />
                <View style={styles.Rectangle32} />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('FindDonar')}>

        <View style={styles.Donor11}>
          <View style={styles.Donor1}>
            <Image
              style={styles.Group21}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A482?alt=media&token=27392ba9-0b83-4786-b329-0a35a294e40d",
              }}
            />

            <View style={styles.Group637}>
              <View style={styles.Group30}>
                <Text style={styles.Txt273}>Krithik Ram</Text>
                <View style={styles.Group637}>
                  <Image
                    style={styles.MapPin}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A479?alt=media&token=1668a9ea-deb8-43d5-8680-e2182626b369",
                    }}
                  />
                  <Text style={styles.Txt6610}>Erode, Tamil Nadu</Text>
                </View>
              </View>
              <View style={styles.BloodGroup}>
                <Text style={styles.Txt024}>B+</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        
        <View style={styles.Donor11}>
          <View style={styles.Donor1}>
            <Image
              style={styles.Group21}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A498?alt=media&token=e4a1be86-39ba-466e-aa11-117c034d3222",
              }}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('FindDonar')}>
            <View style={styles.Group637}>
              <View style={styles.Group29}>
                <Text style={styles.Txt683}>Kannan</Text>
                <View style={styles.Group637}>
                  <Image
                    style={styles.MapPin}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A495?alt=media&token=3be7eefb-0b9c-47c6-a65b-ef3e36a62b76",
                    }}
                  />
                  <Text style={styles.Txt693}>Tirunelveli, Tamil Nau</Text>
                </View>
              </View>
              <View style={styles.BloodGroup1}>
                <Text style={styles.Txt980}>AB+</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('FindDonar')}>

        <View style={styles.Donor11}>
          <View style={styles.Donor1}>
            <Image
              style={styles.Group21}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A514?alt=media&token=5aa4765b-a190-4cb5-99ba-718327d24290",
              }}
            />
            <View style={styles.Group637}>
              <View style={styles.Group29}>
                <Text style={styles.Txt1056}>Harshad</Text>
                <View style={styles.Group637}>
                  <Image
                    style={styles.MapPin}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A511?alt=media&token=b08df076-28b2-4699-bf5a-6d3cb8b4f4d4",
                    }}
                  />
                  <Text style={styles.Txt693}>Erode, Tamil Nadu</Text>
                </View>
              </View>
              <View style={styles.BloodGroup2}>
                <Text style={styles.Txt024}>B-</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('FindDonar')}>

        <View style={styles.Donor4}>
          <View style={styles.Group637}>
            <View style={styles.Group27}>
              <Text style={styles.Txt010}>Rahul</Text>
              <View style={styles.Group637}>
                <Image
                  style={styles.MapPin}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A527?alt=media&token=c4250688-a7b7-4128-8898-90a9d219260c",
                  }}
                />
                <Text style={styles.Txt991}>Coimbatore, Tamil Nadu</Text>
              </View>
            </View>
            <View style={styles.BloodGroup3}>
              <Text style={styles.Txt024}>O+</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('FindDonar')}>

        <View style={styles.Donor5}>
          <View style={styles.Group637}>
            <View style={styles.Group29}>
              <Text style={styles.Txt273}>Aditya</Text>
              <View style={styles.Group637}>
                <Image
                  style={styles.MapPin}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A541?alt=media&token=80bb5845-6e8c-42a6-be43-883da1b66249",
                  }}
                />
                <Text style={styles.Txt693}>Salem, Tamil Nadu</Text>
              </View>
            </View>
            <View style={styles.BloodGroup4}>
              <Text style={styles.Txt024}>A+</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('FindDonar')}>

        <View style={styles.Group318}>
          <Image
            style={styles.Person_outline}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A595?alt=media&token=b5ae02c9-40bc-4723-885d-973339e62f02",
            }}
          />
          <View style={styles.Donor6}>
            <View style={styles.Donor12}>
              <Text style={styles.Txt9101}>Jayanthan</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.Person_outline1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A585?alt=media&token=3d8b0d19-cb6a-45e3-9619-8e324ea26eb9",
        }}
      />
      <Image
        style={styles.Person_outline2}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A587?alt=media&token=7a9ec087-ff88-4138-89b5-00ad468a074a",
        }}
      />
      <Image
        style={styles.Person_outline3}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A589?alt=media&token=8794a047-4852-4887-bf98-6a6e31424680",
        }}
      />
      <Image
        style={styles.Person_outline4}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A591?alt=media&token=fc5a6f66-56ae-4797-a72c-d9d2d0803a95",
        }}
      />
      <Image
        style={styles.Person_outline5}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A593?alt=media&token=a0b132f0-a88e-4f0f-8fa8-798c259c0d51",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  FindDonors: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 37,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 414,
    height: 896,
  },
  Group621: {
    display: "flex",
    flexDirection: "column",
  },
  Group742: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },
  BackArrow: {
    width: 44,
    height: 44,
    marginRight: 49,
  },
  Txt566: {
    fontSize: 22,
    
    fontWeight: "500",
    letterSpacing: 0.44,
    color: "rgba(39,42,47,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 190,
    height: 35,
  },

  Group541: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 36,
  },
  Group1026: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 9,
    paddingBottom: 8,
    paddingLeft: 36,
    paddingRight: 103,
    marginRight: 11,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(47,47,47,0.1)",
    elevation: 3,
    shadowOffset: { width: 0, height: 4 },
  },
  Search: {
    width: 24,
    height: 24,
    marginRight: 32,
  },
  Txt147: {
    fontSize: 18,
    
    fontWeight: "500",
    letterSpacing: 0.36,
    color: "rgba(205,205,205,1)",
    width: 118,
    height: 29,
  },

  Group2910: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 5,
    backgroundColor: "rgba(255,33,86,1)",
    width: 48,
    height: 48,
  },
  Group25: {
    width: 22,
    height: 32,
  },
  Ellipse12: {
    backgroundColor: "rgba(255,33,86,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  Ellipse11: {
    backgroundColor: "rgba(255,33,86,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  Rectangle31: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 3,
    height: 32,
    borderRadius: 10,
    marginRight: 12,
  },
  Rectangle32: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 3,
    height: 32,
    borderRadius: 10,
  },

  Donor11: {
    paddingTop: 28,
    paddingBottom: 12,
    paddingLeft: 124,
    paddingRight: 18,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(65,65,65,0.1)",
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    width: 374,
    height: 111,
  },
  Donor1: {
    width: 229.8,
    height: 68.8,
  },
  Group21: {
    width: 19.6,
    height: 19.6,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  Group30: {
    display: "flex",
    flexDirection: "column",
    marginRight: 5,
  },
  Txt273: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: 0.32,
    color: "rgba(39,42,47,1)",
    width: 146,
    height: 21,
    marginBottom: 14,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  MapPin: {
    width: 16,
    height: 16,
    marginRight: 9,
  },
  Txt6610: {
    fontSize: 12,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 165,
    height: 21,
  },

  BloodGroup: {
    paddingTop: 15.5,
    paddingBottom: 2.5,
    paddingLeft: 3.5,
    paddingRight: 1.5,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255,33,86,1), rgba(255,33,86,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A473?alt=media&token=e598d187-57f2-4036-84a4-ddfb3f90c3f6) */
    width: 35,
    height: 50,
  },
  Txt024: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: -1.36,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 27,
    height: 29,
  },

  Donor11: {
    paddingTop: 28,
    paddingBottom: 12,
    paddingLeft: 124,
    paddingRight: 18,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(65,65,65,0.1)",
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    width: 374,
    height: 111,
  },
  Donor1: {
    width: 229.8,
    height: 68.8,
  },
  Group21: {
    width: 19.6,
    height: 19.6,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  Group29: {
    display: "flex",
    flexDirection: "column",
    marginRight: 21,
  },
  Txt683: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: 0.32,
    color: "rgba(39,42,47,1)",
    width: 150,
    height: 21,
    marginBottom: 14,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  MapPin: {
    width: 16,
    height: 16,
    marginRight: 9,
  },
  Txt693: {
    fontSize: 12,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 149,
    height: 21,
  },

  BloodGroup1: {
    paddingTop: 15.5,
    paddingBottom: 2.5,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255,33,86,1), rgba(255,33,86,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A489?alt=media&token=0a057b6b-2744-46bb-82d5-3669de5f11e4) */
    width: 35,
    height: 50,
  },
  Txt980: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: -1.36,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 35,
    height: 29,
  },

  Donor11: {
    paddingTop: 28,
    paddingBottom: 12,
    paddingLeft: 124,
    paddingRight: 18,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(65,65,65,0.1)",
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    width: 374,
    height: 111,
  },
  Donor1: {
    width: 229.8,
    height: 68.8,
  },
  Group21: {
    width: 19.6,
    height: 19.6,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  Group29: {
    display: "flex",
    flexDirection: "column",
    marginRight: 21,
  },
  Txt1056: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: 0.32,
    color: "rgba(39,42,47,1)",
    width: 130,
    height: 21,
    marginBottom: 14,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  MapPin: {
    width: 16,
    height: 16,
    marginRight: 9,
  },
  Txt693: {
    fontSize: 12,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 149,
    height: 21,
  },

  BloodGroup2: {
    paddingTop: 16.5,
    paddingBottom: 1.5,
    paddingLeft: 3.5,
    paddingRight: 1.5,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255,33,86,1), rgba(255,33,86,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A505?alt=media&token=bd11778f-4d12-47c8-a806-216c2206d8dd) */
    width: 35,
    height: 50,
  },
  Txt024: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: -1.36,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 27,
    height: 29,
  },

  Donor4: {
    paddingTop: 28,
    paddingBottom: 26,
    paddingLeft: 125,
    paddingRight: 18,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(65,65,65,0.1)",
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    width: 374,
    height: 111,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  Group27: {
    display: "flex",
    flexDirection: "column",
    marginRight: 13,
  },
  Txt010: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: 0.32,
    color: "rgba(39,42,47,1)",
    width: 116,
    height: 21,
    marginBottom: 14,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  MapPin: {
    width: 16,
    height: 16,
    marginRight: 9,
  },
  Txt991: {
    fontSize: 12,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 157,
    height: 21,
  },

  BloodGroup3: {
    paddingTop: 16.5,
    paddingBottom: 1.5,
    paddingLeft: 3.5,
    paddingRight: 1.5,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255,33,86,1), rgba(255,33,86,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A521?alt=media&token=23b8f038-bd20-4e77-a9ea-5a5e973d5d06) */
    width: 35,
    height: 50,
  },
  Txt024: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: -1.36,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 27,
    height: 29,
  },

  Donor5: {
    paddingTop: 28,
    paddingBottom: 26,
    paddingLeft: 125,
    paddingRight: 18,
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(65,65,65,0.1)",
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    width: 374,
    height: 111,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  Group29: {
    display: "flex",
    flexDirection: "column",
    marginRight: 21,
  },
  Txt273: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: 0.32,
    color: "rgba(39,42,47,1)",
    width: 146,
    height: 21,
    marginBottom: 14,
  },
  Group637: {
    display: "flex",
    flexDirection: "row",
  },
  MapPin: {
    width: 16,
    height: 16,
    marginRight: 9,
  },
  Txt693: {
    fontSize: 12,
    
    fontWeight: "500",
    color: "rgba(126,126,126,1)",
    width: 149,
    height: 21,
  },

  BloodGroup4: {
    paddingTop: 16.5,
    paddingBottom: 1.5,
    paddingLeft: 3.5,
    paddingRight: 1.5,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255,33,86,1), rgba(255,33,86,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tllr4jw4awn-24%3A535?alt=media&token=75ff92dc-e288-4c9f-bda9-aa5a9bf000e5) */
    width: 35,
    height: 50,
  },
  Txt024: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: -1.36,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 27,
    height: 29,
  },

  Group318: {
    position: "relative",
    paddingTop: 13,
    paddingBottom: 31,
    paddingLeft: 25,
    paddingRight: 22,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(65,65,65,0.1)",
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    width: 374,
    height: 111,
  },
  Person_outline: {
    position: "absolute",
    top: 14,
    left: 26,
    width: 60,
    height: 61,
  },
  Donor6: {
    position: "absolute",
    top: 19,
    left: 122,
    width: 229,
    height: 60,
  },
  Donor12: {
    paddingTop: 0,
    paddingBottom: 39,
    paddingLeft: 0,
    paddingRight: 72,
    width: 229,
    height: 60,
  },
  Txt9101: {
    fontSize: 16,
    
    fontWeight: "500",
    letterSpacing: 0.32,
    color: "rgba(39,42,47,1)",
    width: 157,
    height: 21,
  },

  Person_outline1: {
    position: "absolute",
    top: 217,
    left: 48,
    width: 60,
    height: 61,
  },
  Person_outline2: {
    position: "absolute",
    top: 353,
    left: 48,
    width: 60,
    height: 61,
  },
  Person_outline3: {
    position: "absolute",
    top: 489,
    left: 48,
    width: 60,
    height: 61,
  },
  Person_outline4: {
    position: "absolute",
    top: 629,
    left: 48,
    width: 60,
    height: 61,
  },
  Person_outline5: {
    position: "absolute",
    top: 765,
    left: 48,
    width: 60,
    height: 61,
  },
})
