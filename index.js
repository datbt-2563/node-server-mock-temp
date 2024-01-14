// create a server with express
const express = require("express");
const multer = require("multer");
const upload = multer();

const app = express();
const port = 9000;

// register a route to handle POST requests on the root path (/api/v1/verify)
app.post("/api/v1/verify", upload.single("file"), (req, res) => {
  // send a response
  console.log(req.file);
  console.log(req.body.targetTime);
  console.log(req.body.ownerPassword);
  console.log(req.body.options);

  res.send({
    valid: true,
    analysis: [
      {
        name: "Signature1",
        subFilter: "adbe.pkcs7.detached",
        timeStampTokenEncoded:
          "MO+/vRZDBgkq77+9SO+/ve+/vQ0BBwLvv73vv70WNDDvv70WMAIBAzEPMA0GCWDvv71IAWUDBAIDBQAw77+9AToGCyrvv71I77+977+9DQEJEAEE77+977+9ASkE77+9ASUw77+9ASECAQEGDCsGAQQB77+9OwEKAQUBMDEwDQYJYO+/vUgBZQMEAgEFAAQg77+9XO+/vX4WdO+/vUvvv70EYitLMwrvv718ZX3vv70q77+9NWESG3Q877+9K++/vS8CDgF+Uu+/ve+/vSQAAAAAAO+/vVAyGBUyMDIyMDEyODA1MjUyOC4zODc0NFowAwIBAe+/ve+/ve+/ve+/ve+/ve+/vTDvv73vv70xCzAJBgNVBAYTAkpQMQ4wDAYDVQQIEwVDaGliYTEOMAwGA1UEBxMFQ2hpYmExHTAbBgNVBAoTFFNFSUtPIFNvbHV0aW9ucyBJbmMuMSIwIAYDVQQLExlTRUlLTyBUaW1lc3RhbXAgQXV0aG9yaXR5MTYwNAYDVQQDEy1TRUlLTyBUaW1lc3RhbXAgU2VydmljZS4gQWNjcmVkaXRlZCBBMlcwMi0wMDjvv73vv70R77+9MO+/vQYYMO+/vQQA77+9AwIBAgIMR++/vVLvv70v77+9eO+/vXRmRS8wDQYJKu+/vUjvv73vv70NAQEMBQAwVzELMAkGA1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExLTArBgNVBAMTJEdsb2JhbFNpZ24gQ0EgZm9yIEFBVEwgLSBTSEEzODQgLSBHNDAeFw0yMTAyMTAwMDAwMDBaFw0zMjA1MTAwMDAwMDBaMO+/ve+/vTELMAkGA1UEBhMCSlAxDjAMBgNVBAgTBUNoaWJhMQ4wDAYDVQQHEwVDaGliYTEdMBsGA1UEChMUU0VJS08gU29sdXRpb25zIEluYy4xIjAgBgNVBAsTGVNFSUtPIFRpbWVzdGFtcCBBdXRob3JpdHkxNjA0BgNVBAMTLVNFSUtPIFRpbWVzdGFtcCBTZXJ2aWNlLiBBY2NyZWRpdGVkIEEyVzAyLTAwODDvv70BIjANBgkq77+9SO+/ve+/vQ0BAQEFAAPvv70BDwAw77+9AQoC77+9AQEA77+977+977+977+9LBjvv71Wce+/vRxr77+9Te+/ve+/vT/vv70CCVbvv70NW++/vTtXOGzvv71R77+9BO+/ve+/vQVd77+977+9LDPvv70yce+/vQQC77+9X13vv71pXu+/vQ7YvTbvv70A77+977+977+9RUsnJVca77+977+9Ju+/ve+/vSsgd++/vUglW0QDWO+/ve+/ve+/ve+/vc2277+977+9LO+/vRjvv71T77+977+9WUPvv71pGjwC77+9PUTvv717bkrvv73vv70DO++/vW7vv73vv71/I86P77+9D++/ve+/ve+/vTDvv71O77+977+9aO+/vXUD77+977+977+9SELvv73vv70I77+977+9TE7vv70tAlBu77+9G++/vRtBZO+/ve+/vTjvv73vv73vv73vv70E77+95LGh77+9J++/ve+/vRVh77+977+977+9de+/vX/vv71D77+977+9Xu+/vRxE77+977+977+9bu+/ve+/vQdT77+9D9q6VWLvv70877+977+9VO+/vdCmHzPvv73vv71t77+9LSfvv70d77+9TiYmT++/vcyLaSvvv73vv73vv71hUypW77+977+9W23vv73vv70hAe+/vQkCAwEAAe+/ve+/vQHvv70w77+9Ae+/vTAOBgNVHQ8BAe+/vQQEAwIH77+9MEwGA1UdIARFMEMwQQYJKwYBBAHvv70yAR8wNDAyBggrBgEFBQcCARYmaHR0cHM6Ly93d3cuZ2xvYmFsc2lnbi5jb20vcmVwb3NpdG9yeS8wCQYDVR0TBAIwADAWBgNVHSUBAe+/vQQMMAoGCCsGAQUFBwMIMD4GA1UdHwQ3MDUwM++/vTHvv70v77+9LWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vY2EvZ3NhYXRsc2hhMmc0LmNybDDvv73vv70GCCsGAQUFBwEBBHwwejBABggrBgEFBQcwAu+/vTRodHRwOi8vc2VjdXJlLmdsb2JhbHNpZ24uY29tL2NhY2VydC9nc2FhdGxzaGEyZzQuY3J0MDYGCCsGAQUFBzAB77+9Kmh0dHA6Ly9vY3NwLmdsb2JhbHNpZ24uY29tL2NhL2dzYWF0bHNoYTJnNDAfBgNVHSMEGDAW77+9FO+/ve+/vXVxel9HG++/vSPckErvv73vv73vv70mNgjvv70wHQYDVR0OBBYEFFVD77+9BC7vv73vv73vv73vv71f77+977+9ACDvv73vv71e77+977+9MA0GCSrvv71I77+977+9DQEBDAUAA++/vQIBAHMy77+9dTBL77+977+9y5zvv71McQLvv71wE1dR77+9ce+/vWpBG++/vWxeRxhgJiAA0pB/77+9ckcP77+977+9KQPvv70IOhXvv70I77+977+9Se+/vW/vv707Z++/vRDvv70l77+977+977+9LTPvv70C77+977+9MO+/vUYncu+/ve+/vUfvv73vv73vv73vv71AGSFtQxZ8Je+/vXoUNBLvv73vv73sv7Tvv71tODYdUG3vv70kUO+/ve+/vWDvv70EGu+/vRXvv70xRu+/vRAvAu+/ve+/vTEE77+9Wu+/vR/vv73vv73vv73vv70T77+977+977+9LGjvv71U77+977+977+9CSwHUgQQ77+9Knvvv70uWAjvv71R77+9Iu+/vSUSYktE77+9Ce+/ve+/vVPvv70BJ++/ve+/ve+/vUHvv71977+9K++/vUfTlyPvv73vv71x77+93LLvv71k77+9Hnvvv71yL05CIRBb77+977+9Dg5BXu+/vTrvv70A77+9Su+/ve+/vQzvv73vv73vv719CXzvv71/M++/vUrvv73vv70m77+9AO+/vUrvv70X77+9NOWEqu+/ve+/vULvv73vv70y77+977+977+977+977+9QO+/ve+/vV5t77+977+977+9Ze+/vT3vv70k77+9NRXvv714C++/ve+/vXEULj3vv73ds0YD77+977+9SO+/vWsgxJ1D77+977+977+9Yhbvv73vv73vv73jnIFM77+977+977+9Xm/vv70bLEnvv73vv71PLu+/ve+/vXjCku+/ve+/vWEN77+977+9UXA477+977+977+977+9UQJq77+9TnlDDknvv73vv73IrnDvv70Fb1Md77+977+977+9MO+/ve+/ve+/vWPvv716O++/ve+/vQVS77+9Uu+/ve+/vUEETwsuTyjvv70e5IC/xIVn77+9G17vv73vv71G77+977+977+977+9QO+/vT/vv73vv73vv73vv73vv71M77+9Ku+/ve+/ve+/ve+/vQFyXz0Tc++/ve+/vTV+77+9x7ldRu+/ve+/vXjvv73vv71sxLTvv73vv73vv71vVO+/ve+/vX/vv70F77+9Hu+/vcaBOe+/ve+/vS1vTNGPJEvvv70n77+9Du+/vc2z77+9N++/vXLvv70vb1oS77+977+977+9cyE+IWXvv73vv71+77+9AgAV77+9P++/ve+/vTDvv70GUjDvv70EOu+/vQMCAQICDQHvv73YpO+/vS0rKBE577+977+9TTANBgkq77+9SO+/ve+/vQ0BAQwFADBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSNjETMBEGA1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xODA0MTgwMDAwMDBaFw0zNDEyMTAwMDAwMDBaMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWduIG52LXNhMS0wKwYDVQQDEyRHbG9iYWxTaWduIENBIGZvciBBQVRMIC0gU0hBMzg0IC0gRzQw77+9AiIwDQYJKu+/vUjvv73vv70NAQEBBQAD77+9Ag8AMO+/vQIKAu+/vQIBAO+/vXA9xpDvv70J77+9Lu+/ve+/ve+/vVbvv70jKB8/ZO+/vWDvv71X77+9Xe+/ve+/vXMf77+977+977+9bA5OUO+/vXHvv70pd0Hvv70/Te+/ve+/ve+/vTpMLng9cu+/vSrvv73vv702NO+/vSrvv70O77+9DzgfR++/vR5TLWQ0VO+/vQvvv706Ye+/ve+/vX7vv73vv73vv70aZDLvv73vv70OKk46S++/vT7vv73vv71kZWciZe+/ve+/vTnvv704OkkELjHvv706HTTvv701He+/vRFLYz5y77+91p3vv73WmF0iGxp3Gj1AfkTvv70D77+977+977+977+977+9Cu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vXDvv73vv70f77+9Qu+/ve+/vSpl77+9Ne+/ve+/vUXvv73vv71677+9Ie+/ve+/vV0ccHtnSxwE77+9HO+/vUjvv71yDe+/vRUN77+977+977+9MHfvv70SZhc077+977+977+9FEnvv73vv71keFLvv73vv73vv73vv71JS++/ve+/ve+/vTzvv70+RwDvv73vv73vv71M77+9dO+/ve+/ve+/vTot77+977+9V++/ve+/vSZN77+9QBvvv71/zIHvv73vv71+77+9AQUZG1sNCO+/ve+/vQvvv70X77+977+977+977+9KFbMt++/ve+/vW/vv71BBS4G77+9au+/vU3vv73vv70777+9c++/vVfvv73vv73vv73vv71CZw9/LRRy77+9XXDvv71p77+9Ge+/vR7vv71d77+977+977+977+977+977+977+9eO+/ve+/vXApCX5YYELvv70Y77+9KO+/vQ/bjAw877+977+9VjPvv70gZyxAcu+/vXoM77+977+977+9KBpo77+977+9eGjvv71l77+9Uu+/vTVJJe+/vdex77+9dUjvv70DWO+/vWxz77+9Hu+/vUtTPVrvv73vv73vv70IGO+/vWhO77+9zqE377+9Eu+/vVfMoD4RSO+/ve+/ve+/vSc+GUlC77+9aHExOu+/vSR+77+977+9Kwzvv707KO+/ve+/ve+/vXdgW++/vTrvv70V77+9BV/vv73vv70377+9emcLOHvvv73vv73Vqe+/ve+/ve+/vdGKfe+/ve+/ve+/ve+/vQw9KMWUGEDvv70bQO+/ve+/ve+/ve+/vT3vv71FKwIDAQAB77+977+9ASYw77+9ASIwDgYDVR0PAQHvv70EBAMCAe+/vTAPBgNVHRMBAe+/vQQFMAMBAe+/vTAdBgNVHQ4EFgQU77+977+9dXF6X0cb77+9I9yQSu+/ve+/ve+/vSY2CO+/vTAfBgNVHSMEGDAW77+9FO+/vWwF77+977+9E++/ve+/ve+/ve+/vRzvv73vv73vv71/77+9Z1Pvv70wPgYIKwYBBQUHAQEEMjAwMC4GCCsGAQUFBzAB77+9Imh0dHA6Ly9vY3NwMi5nbG9iYWxzaWduLmNvbS9yb290cjYwNgYDVR0fBC8wLTAr77+9Ke+/vSfvv70laHR0cDovL2NybC5nbG9iYWxzaWduLmNvbS9yb290LXI2LmNybDBHBgNVHSAEQDA+MDwGBFUdIAAwNDAyBggrBgEFBQcCARYmaHR0cHM6Ly93d3cuZ2xvYmFsc2lnbi5jb20vcmVwb3NpdG9yeS8wDQYJKu+/vUjvv73vv70NAQEMBQAD77+9AgEAPNOVRXNe77+9168N77+9dWvvv71d77+977+9S++/vcOxP++/ve+/ve+/vWY8Ru+/vSFnDghp77+977+977+9Lu+/vU42Uu+/ve+/vXcJ77+9Iu+/vTTvv73vv73vv73vv709TD1M77+977+977+9YEjvv73vv71nOXNDIu+/ve+/vVTvv73ciO+/ve+/ve+/ve+/ve+/vW3vv70V77+977+977+977+9Ae+/vQhXDh8j77+9Xe+/ve+/vXbvv71V77+9IiLvv73vv70leNSl77+9Hu+/ve+/vTJ7CgLvv73vv71WGUUMf03vv73vv70tbu+/vd652Lzvv70j77+9BO+/ve+/ve+/ve+/vVHvv73vv71w77+977+977+977+977+9yLDvv70g77+9yqxY77+9YO+/ve+/veOIsu+/vUFLRu+/ve+/ve+/vX7vv70aNO+/vXsLQCgx77+977+9Mu+/vVHvv73vv73vv70Ry6sPYO+/vTZEYxzvv710VSVWZe+/vc6kEO+/vSQj77+977+977+9DjNOMu+/vdWf77+9N++/ve+/vWonIu+/vUHvv73NmD1QNyHvv70b77+9YR3vv73vv73vv70j77+9zrEQ77+977+9Pnjvv73vv73vv70b77+977+977+9b++/vQ3vv73vv70RDH3vv73vv70y77+977+9Ue+/ve+/ve+/vRFTbH3vv73vv73vv73vv71n77+977+977+977+977+977+9Ze+/vS7vv70577+9O0Yp77+9Rkfvv73vv73vv70eNF5n77+977+9SUrvv73vv70uMe+/ve+/vUPvv73vv73vv70u77+977+977+9QO+/vVlFyaXvv73vv709Lu+/ve+/ve+/vQLvv73vv73vv73vv718Ojfvv71E77+977+9bk8c77+977+977+977+977+9fueMie+/vS0o77+977+977+9PGZv77+9KELvv70ABu+/vRHvv71d77+9OQU677+9PO+/vWbvv71BAyPvv71d77+9Ee+/vW7vv73vv70uVg0377+977+9W++/ve+/vVMFKyYzCe+/vUXvv71lbe+/ve+/ve+/vWnvv71vKhDvv71BSQnvv73vv70EHQQpYBYF77+9PWDvv70677+9Ee+/ve+/ve+/vVFK77+977+9QE8I77+9Rlgu77+9EnROJwFM77+977+9JXFLQxPvv73vv70d77+977+9FSR0Chvvv70rTALvv71w77+9Ye+/vXFBMO+/vQXvv70w77+9A2vvv70DAgECAg5F77+9A++/vTPDhWVI77+977+9RVEwDQYJKu+/vUjvv73vv70NAQEMBQAwTDEgMB4GA1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjYxEzARBgNVBAoTCkdsb2JhbFNpZ24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMTQxMjEwMDAwMDAwWhcNMzQxMjEwMDAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSNjETMBEGA1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjDvv70CIjANBgkq77+9SO+/ve+/vQ0BAQEFAAPvv70CDwAw77+9AgoC77+9AgEA77+9B++/vXPvv71m77+977+9FO+/vXs877+9DQjvv71FCyzvv73vv71I77+977+9Wzzvv73vv73vv71B77+9MxTvv71vf++/vSrvv73GsO+/vWvFtu+/ve+/vcay77+9FO+/vVEUIe+/vUrvv70bWu+/vdaH77+9TToVBu+/vWRmC++/ve+/ve+/vUTvv71z77+9Tu+/vX9PeGMI77+9ElBtQmYvTe+/vXkoTVIa77+9Gu+/ve+/vRnvv70OfsSK77+9ZEwhHENo77+9PTzvv73FsmbVkO+/ve+/vTEGxb7vv71tMgbvv70e77+977+966qj77+977+977+977+9Y1Dvv73vv70Y77+977+977+9D3nvv73vv70fKu+/vXAue+e8k++/vW1T77+9SHzvv70QBzjvv71m77+9d2F+77+977+9PO+/ve+/ve+/ve+/ve+/vUoSB23vv73vv73vv73vv73vv73QoGF377+9WHTvv73vv70jOu+/vV06yqLbnQnvv71dRC3vv73vv73vv71X77+977+9fu+/vVAEYzTvv71r77+9GO+/vWs277+9Oe+/vSQ277+977+977+9HBNX77+977+93rLvv73ihbdz77+977+9Ne+/vUXvv73vv73vv70277+9b1Tvv73vv71yVm4u77+977+9UUJEFe+/ve+/ve+/vTjvv73vv71OTloLR++/vQY2SXcw77+9cTfvv73vv70hCHXvv73vv71hFj9377+92ZHvv73vv70KbO+/vQJNdO+/vRTvv73vv70577+977+977+9XhTvv70E77+9C++/ve+/ve+/ve+/vW4L77+9CO+/vWFmCWrvv70GOmXvv71Z77+977+9Ne+/ve+/ve+/vSjvv70aEe+/vXDvv70K77+977+9dR3vv70677+9BQDvv73bgO+/vSXvv73vv70F77+9J1lMdjlb77+977+977+977+92IMP77+977+977+9MBHvv73vv73vv70zSO+/ve+/vW1kFCx6WE/vv71LCEnFlWQaYw55Pe+/ve+/ve+/ve+/vVjvv73vv71CRXluDu+/vRlcVO+/vWXvv73vv73vv73vv73vv70T77+9DW/vv70u77+9Z27JixHvv73vv70U77+9ABlw77+9ee+/ve+/ve+/ve+/vRon77+9Nx4yB++/vRRjPChM77+9AgMBAAHvv71jMGEwDgYDVR0PAQHvv70EBAMCAQYwDwYDVR0TAQHvv70EBTADAQHvv70wHQYDVR0OBBYEFO+/vWwF77+977+9E++/ve+/ve+/ve+/vRzvv73vv73vv71/77+9Z1Pvv70wHwYDVR0jBBgwFu+/vRTvv71sBe+/ve+/vRPvv73vv73vv73vv70c77+977+977+9f++/vWdT77+9MA0GCSrvv71I77+977+9DQEBDAUAA++/vQIBAO+/vSXvv73vv73vv73vv73vv71SzZ7vv70E77+977+9ae+/vVzQhO+/vdyt77+9T++/vUd477+9Ze+/ve+/vVvvv70877+9fALvv73vv71u77+9FnPvv71f77+9VO+/ve+/vXTvv73vv73vv73vv70R77+977+9Ixg977+977+9ckTvv73vv73vv71e77+9e++/ve+/vXgWQxNWV++/ve+/ve+/vTvvv71377+9QHLvv73vv73vv701Pu+/vQgh77+977+977+9Qzd5Mu+/ve+/ve+/vSxM77+9Qynvv73vv70w06wh77+977+9He+/ve+/vQczdlQAIirvv71NIC5waO+/ve+/vVPvv73vv71c053vv73vv71EDERm77+977+977+9RgAabQLvv70lXe+/ve+/vTFR77+9VEYcTduZ77+977+9GhwEXO+/vRXvv71477+9ee+/vV3vv70+77+9TFXvv73vv70V77+9b++/ve+/ve+/vXAw77+977+977+9Qkbvv73CkwXvv73vv719Y3s/77+9ce+/vXwA6JiuDng077+9Je+/ve+/vQrvv70ga++/vTsT77+9Eu+/ve+/vUEaSHpz77+9d2nHtlx/77+977+9Hu+/vVgbKCvvv71s77+9Xm3vv70F77+9e++/ve+/ve+/vSU377+9Au+/vWjvv71CXe+/ve+/ve+/ve+/ve+/ve+/vVB177+9Nmnvv73vv717BO+/vW4Gae+/ve+/vQoJSFnvv73vv717FGB6ZO+/vWlD77+977+9TO+/vRjvv71s77+9Uy3vv73vv73vv71e77+9cj7vv71UyL1n77+9D0xF77+907kwIwdM77+9EO+/ve+/ve+/vdmZWu+/ve+/vVcc77+9zLsV77+9U++/vSwFD++/vcSeGe+/vRg077+9TO+/ve+/ve+/ve+/vR/vv70k77+9BHjvv70D77+977+977+977+9X3zvv71K77+977+9dCXvv73vv70+S++/vSxW77+977+977+977+9OO+/vVzvv73vv71577+977+977+977+9dC1hASB+fu+/ve+/vU8HWV/vv70tQ1Lvv71GDO+/ve+/ve+/vWZHeXfvv71UWx/vv70kN++/vUVaTu+/vURI77+92LDvv73vv70V77+9Ce+/ve+/vUlJ77+9Ze+/ve+/vRpxbu+/ve+/ve+/ve+/vUU+bO+/vQLvv70KZ++/vQVayaQQMe+/vQLvv70w77+9Au+/vQIBATBnMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWduIG52LXNhMS0wKwYDVQQDEyRHbG9iYWxTaWduIENBIGZvciBBQVRMIC0gU0hBMzg0IC0gRzQCDEfvv71S77+9L++/vXjvv710ZkUvMA0GCWDvv71IAWUDBAIDBQDvv73vv70BRzAaBgkq77+9SO+/ve+/vQ0BCQMxDQYLKu+/vUjvv73vv70NAQkQAQQwTwYJKu+/vUjvv73vv70NAQkEMUIEQO+/vTrvv70177+977+9Ye+/vTc+TcOLxL4hAx9/77+977+977+9Ou+/vUfvv70dczvll4V677+9Ku+/vS7vv73vv71hf++/vTJICO+/vWXQlO+/ve+/vRzvv71t77+9W++/vRUu77+9KzLvv71nMO+/ve+/vQYLKu+/vUjvv73vv70NAQkQAi8x77+977+9MO+/ve+/vTDvv73vv70w77+977+9MA0GCWDvv71IAWUDBAIDBQAEQAhaGO+/ve+/ve+/vSNM77+977+9Xk3vv714XO+/vRHvv71vZ++/vX/vv71k67eN77+977+977+9cWMkHHXvv71lAUUOU++/vRHvv70mWMO177+977+977+9a0hS77+9aEJSFgVnF1QmMGswW++/vVkwVzELMAkGA1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExLTArBgNVBAMTJEdsb2JhbFNpZ24gQ0EgZm9yIEFBVEwgLSBTSEEzODQgLSBHNAIMR++/vVLvv70v77+9eO+/vXRmRS8wDQYJKu+/vUjvv73vv70NAQEBBQAE77+9AQBd77+9AnJCJHbvv70uJDVuRXvvv73vv73vv71E77+9KUnvv711ZO+/ve+/vTlU77+977+9de+/vRdNACzvv73vv71UIO+/vWE7BxVG77+9Le+/vSLvv71L77+9XXrvv70177+9GWJhVu+/ve+/vSond++/ve+/vSDvv70RyLLvv73vv70zX++/ve+/vT0c77+9du+/vW7vv70eAe+/ve+/vWN5LO+/ve+/vWzvv70GATHvv70B77+977+9Ke+/vXo8Exgr77+977+977+9O++/vWpnXO+/vRhlSzbvv73vv73vv71577+9T1Xvv71t77+977+9d++/vXl9BO+/vTLvv73vv73vv70e77+9OWdo77+977+9I++/vUUjd++/ve+/vSJtdT0qaO+/vXrvv71X77+9Ae+/ve+/ve+/vV5m77+977+9VO+/vXhh77+977+9Iu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vX3vv70R77+9fu+/vXLvv70s2bDvv71Q77+977+977+9TO+/vVFk77+9WVzNrDfvv73vv73vv70s77+9b3oj77+9Oe+/ve+/ve+/ve+/vXnvv73vv70177+9a++/vVg8L++/ve+/vQlL77+9Uu+/ve+/ve+/vQ==",
        certExpirationDate: "2022-06-28T04:57:43.000+00:00",
        adobeRevocationInfoArchival: [
          {
            version: "2",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
            thisupdate: "2022-01-28T03:37:04.000Z",
            nextupdate: "2022-02-04T03:37:04.000Z",
            revokedcertificates: "(omitted)",
          },
          {
            version: "2",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            thisupdate: "2022-01-28T02:30:13.000Z",
            nextupdate: "2022-02-04T02:30:13.000Z",
            revokedcertificates: "(omitted)",
          },
          {
            version: "2",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            thisupdate: "2022-01-07T00:00:00.000Z",
            nextupdate: "2022-04-15T00:00:00.000Z",
            revokedcertificates: "(omitted)",
          },
        ],
        certs: [
          {
            version: "3",
            serialnumber: "659b5bf88e76eb1bcbc77f8e",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
            notbefore: "2021-05-28T04:57:43.000Z",
            notafter: "2022-06-28T04:57:43.000Z",
            subject:
              "1.2.840.113549.1.9.1=#1617696e666f407365696b6f2d637962657274696d652e6a70,CN=SEIKO Cyber Time, Time Stamp Service,O=SEIKO Solutions Inc.,OU=Cyber Time Center,L=Chiba,ST=Chiba,C=JP",
            subjectaltname: "info@seiko-cybertime.jp",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082010a0282010100994f1ccbd83bcf358331a9bf03ca1b155b9aeadba501db86669413792d31194748562033ad6f5b7d84a5f750878d00ec7cc1fda5f6a96ff1dea79f85a612761e1d178a906064332ec202d5806a242e0c6256f00975844d224a36587e285e1b413b2af3355b2358c6485e7743c4c7c090584b8ee3c13c0c8f439225eaa8cd559c97bc77459c6e4222b7211ea15c149e9754a03d4fbc8e61f0b507c01764aa98670a0d2604d6fcfd4add1e62605ee46b08cf1e0676b6afa495695b9758e2f94b9a3368eedc990fedfb40d43d0f57c69738bec60eb9378a412727c69f3fe65d384b86c08611706dc2ab739bea017082c473c1db0438c395c74360d6cc55d41a12970203010001",
            crldp: "http://crl.globalsign.com/gsgccr6aatlca2020.crl",
            thumbprint: "c7caa8754bbf0ec8a8012da106ee2e38b96603df",
          },
          {
            version: "3",
            serialnumber: "784aa90afb8ffbbc545b4b28b7fca353",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            notbefore: "2020-09-16T00:00:00.000Z",
            notafter: "2030-09-16T00:00:00.000Z",
            subject:
              "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082010a0282010100c235269d784fde730623885ebb4375bc04e68fa85b4f0e248e71d6cf997ee17e8dca5f85b3893cf2bde4887d853a96409125b8cde054f493babea54813009ef22852939e81eec0714886dc37fcb9a6d068fb386fc01830f94f2325f98c292d78e5021aa9036650c90c8e676012b5a8adf6e9750a155fcd1fcd21c7057e1e88684012e1b457d0ebc80aacc0efc05ed2e7bab869d68fc0eda0138ecc1d426f43649bb631a3c7b0c237cd2ab47a5718c0c9211f41a68ba7a7608d40c1b894da72f91fc961c66ce43b2f8f390b0bece7f0bee1cd3ce3a6f87e956f37fd45ea1e65f08fcbf04bfd566d6e918fa19b909844d35c81a6f45f0836033f66b84344d03d8d0203010001",
            crldp: "http://crl.globalsign.com/ca/gsaatlsha2g4.crl",
            thumbprint: "29021ef5eb4a7ad838da8ea5fa936fb3e9aee032",
          },
          {
            version: "3",
            serialnumber: "01e9d8a4a62d2b28113982a94d",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            notbefore: "2018-04-18T00:00:00.000Z",
            notafter: "2034-12-10T00:00:00.000Z",
            subject:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082020a0282020100af703dc690ca09c32efa8ca656bb23281f3f648c60db579b5dfda2731faa87a86c0e4e50fe71f6297741d83f4db5ef9ef03a4c2e783d729e2a9cb03634f02a950ee50f381f47e51e532d643454a60baa3a61a9aa7e98a4d11a6432979d0e2a4e3a4be63eefafdc6465672265fbcd39b3383a49042e31863a1d34ed351dba114b633e72e2d69d94d6985d221b1a771a3d407e44d40384d5fef6810ae4cef8bacce8c8d7cb70fbff1f8c42d9e99e2a65803589bc45f9d37ad421fa9f5d1c707b674b1c04a21ce648eb720db3150da1addd3077e61266173489f6c31449aeeebf647852f1a4fdfb8c494bb7ae923cfb3e47008184fd4cbd74e2f0d53a2dc0d5578692264de49d401bc17fcc81d7e07e890105191b5b0d08d5cc0bbd1783c082a12856ccb7a88c6ff09041052e06d16aaa4dd1fb3be873ba57b394c8f742670f7f2d1472d35d70f869a419da1ee85dfcf683edc3e8c378e8c97029097e586042d818f828c20fdb8c0c3cc0ec9d56339920672c4072a07a0c9e8dad281a68c9cb7868a365e397529c354925d3d7b1b87548d00358986c73c41efd4b533d5a87a5b00818bc684ef8cea13781129857cca03e1148a6bfef273e1949429c6871313ae9247ec0d22b0c923b288693ec77605bcc3ab715dc055fefeb9237937a670b387bacd7d5a9e6c7c5d18a7d8ac2f4c40c3d28c5941840f31b40aae5a6eef53dc3452b0203010001",
            crldp: "http://crl.globalsign.com/root-r6.crl",
            thumbprint: "830a62ddeeaf0630be033d41dbc1310f3b7f74a0",
          },
          {
            version: "3",
            serialnumber: "45e6bb038333c3856548e6ff4551",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            notbefore: "2014-12-10T00:00:00.000Z",
            notafter: "2034-12-10T00:00:00.000Z",
            subject: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082020a02820201009507e873ca66f9ec14ca7b3cf70d08f1b4450b2c82b448c6eb5b3cae83b841923314a46f7fe92accc6b0886bc5b689d1c6b2ff14ce511421ec4add1b5ac6d687ee4d3a1506ed64660b9280ca44de73944ef3a7897f4f786308c812506d42662f4db979284d521a8a1a80b719810e7ec48abc644c211c4368d73d3c8ac5b266d5909ab73106c5bee26d3206a61ef9b9ebaaa3b8bfbe826350d0f01889dfe40f79f5eaa21f2ad2702e7be7bc93bb6d53e2487c8c100738ff66b277617ee0ea8c3caab4a4f6f3954a12076dfd8cb289cfd0a06177c85874b0d4233af75d3acaa2db9d09de5d442d90f181cd5792fa7ebc50046334df6b9318be6b36b239e4ac2436b7f0efb61c135793b6deb2f8e285b773a2b835aa45f2e09d36a16f548af172566e2e88c55142441594eea3c538969b4e4e5a0b47f30636497730bc7137e5a6ec210875fce661163f77d5d99197840a6cd4024d74c014edfd39fb83f25e14a104b00be9feee8fe16e0bb208b36166096ab1063a659659c0f035fdc9da288d1a118770810aa89a751d9e3a8605009edb80d625f9dc059e27594c76395beaf9a5a1d8830fd1ffdf3011f985cf3348f5ca6d64142c7a584fd34b0849c595641a630e793df5b38cca58ad9c4245796e0e87195c54b165b6bf8c9bdc13e90d6fb82edc676ec98b11b584148a0019708379919791d41a27bf371e3207d814633c284caf0203010001",
            thumbprint: "8094640eb5a7a1ca119c1fddd59f810263a7fbd1",
          },
        ],
      },
      {
        name: "Signature2",
        subFilter: "ETSI.RFC3161",
        timeStampTokenEncoded:
          "MO+/vRZEBgkq77+9SO+/ve+/vQ0BBwLvv73vv70WNTDvv70WMQIBAzEPMA0GCWDvv71IAWUDBAIDBQAw77+9ATsGCyrvv71I77+977+9DQEJEAEE77+977+9ASoE77+9ASYw77+9ASICAQEGDCsGAQQB77+9OwEKAQUBMDEwDQYJYO+/vUgBZQMEAgEFAAQg77+977+9XhEA77+9BAfvv71+Yxxa77+9bTo077+9Zh7Dtu+/vTwK77+977+977+9EO+/vVYCDgF+Uu+/ve+/vSQAAAAAAO+/vVByGBYyMDIyMDEyODA1MjUzMS4xOTM3NTVaMAMCAQHvv73vv73vv73vv73vv73vv70w77+977+9MQswCQYDVQQGEwJKUDEOMAwGA1UECBMFQ2hpYmExDjAMBgNVBAcTBUNoaWJhMR0wGwYDVQQKExRTRUlLTyBTb2x1dGlvbnMgSW5jLjEiMCAGA1UECxMZU0VJS08gVGltZXN0YW1wIEF1dGhvcml0eTE2MDQGA1UEAxMtU0VJS08gVGltZXN0YW1wIFNlcnZpY2UuIEFjY3JlZGl0ZWQgQTJXMDItMDA477+977+9Ee+/vTDvv70GGDDvv70EAO+/vQMCAQICDEfvv71S77+9L++/vXjvv710ZkUvMA0GCSrvv71I77+977+9DQEBDAUAMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWduIG52LXNhMS0wKwYDVQQDEyRHbG9iYWxTaWduIENBIGZvciBBQVRMIC0gU0hBMzg0IC0gRzQwHhcNMjEwMjEwMDAwMDAwWhcNMzIwNTEwMDAwMDAwWjDvv73vv70xCzAJBgNVBAYTAkpQMQ4wDAYDVQQIEwVDaGliYTEOMAwGA1UEBxMFQ2hpYmExHTAbBgNVBAoTFFNFSUtPIFNvbHV0aW9ucyBJbmMuMSIwIAYDVQQLExlTRUlLTyBUaW1lc3RhbXAgQXV0aG9yaXR5MTYwNAYDVQQDEy1TRUlLTyBUaW1lc3RhbXAgU2VydmljZS4gQWNjcmVkaXRlZCBBMlcwMi0wMDgw77+9ASIwDQYJKu+/vUjvv73vv70NAQEBBQAD77+9AQ8AMO+/vQEKAu+/vQEBAO+/ve+/ve+/ve+/vSwY77+9VnHvv70ca++/vU3vv73vv70/77+9AglW77+9DVvvv707Vzhs77+9Ue+/vQTvv73vv70FXe+/ve+/vSwz77+9MnHvv70EAu+/vV9d77+9aV7vv70O2L0277+9AO+/ve+/ve+/vUVLJyVXGu+/ve+/vSbvv73vv70rIHfvv71IJVtEA1jvv73vv73vv73vv73Ntu+/ve+/vSzvv70Y77+9U++/ve+/vVlD77+9aRo8Au+/vT1E77+9e25K77+977+9Azvvv71u77+977+9fyPOj++/vQ/vv73vv73vv70w77+9Tu+/ve+/vWjvv711A++/ve+/ve+/vUhC77+977+9CO+/ve+/vUxO77+9LQJQbu+/vRvvv70bQWTvv73vv70477+977+977+977+9BO+/veSxoe+/vSfvv73vv70VYe+/ve+/ve+/vXXvv71/77+9Q++/ve+/vV7vv70cRO+/ve+/ve+/vW7vv73vv70HU++/vQ/aulVi77+9PO+/ve+/vVTvv73Qph8z77+977+9be+/vS0n77+9He+/vU4mJk/vv73Mi2kr77+977+977+9YVMqVu+/ve+/vVtt77+977+9IQHvv70JAgMBAAHvv73vv70B77+9MO+/vQHvv70wDgYDVR0PAQHvv70EBAMCB++/vTBMBgNVHSAERTBDMEEGCSsGAQQB77+9MgEfMDQwMgYIKwYBBQUHAgEWJmh0dHBzOi8vd3d3Lmdsb2JhbHNpZ24uY29tL3JlcG9zaXRvcnkvMAkGA1UdEwQCMAAwFgYDVR0lAQHvv70EDDAKBggrBgEFBQcDCDA+BgNVHR8ENzA1MDPvv70x77+9L++/vS1odHRwOi8vY3JsLmdsb2JhbHNpZ24uY29tL2NhL2dzYWF0bHNoYTJnNC5jcmww77+977+9BggrBgEFBQcBAQR8MHowQAYIKwYBBQUHMALvv700aHR0cDovL3NlY3VyZS5nbG9iYWxzaWduLmNvbS9jYWNlcnQvZ3NhYXRsc2hhMmc0LmNydDA2BggrBgEFBQcwAe+/vSpodHRwOi8vb2NzcC5nbG9iYWxzaWduLmNvbS9jYS9nc2FhdGxzaGEyZzQwHwYDVR0jBBgwFu+/vRTvv73vv711cXpfRxvvv70j3JBK77+977+977+9JjYI77+9MB0GA1UdDgQWBBRVQ++/vQQu77+977+977+977+9X++/ve+/vQAg77+977+9Xu+/ve+/vTANBgkq77+9SO+/ve+/vQ0BAQwFAAPvv70CAQBzMu+/vXUwS++/ve+/vcuc77+9THEC77+9cBNXUe+/vXHvv71qQRvvv71sXkcYYCYgANKQf++/vXJHD++/ve+/vSkD77+9CDoV77+9CO+/ve+/vUnvv71v77+9O2fvv70Q77+9Je+/ve+/ve+/vS0z77+9Au+/ve+/vTDvv71GJ3Lvv73vv71H77+977+977+977+9QBkhbUMWfCXvv716FDQS77+977+97L+077+9bTg2HVBt77+9JFDvv73vv71g77+9BBrvv70V77+9MUbvv70QLwLvv73vv70xBO+/vVrvv70f77+977+977+977+9E++/ve+/ve+/vSxo77+9VO+/ve+/ve+/vQksB1IEEO+/vSp777+9LlgI77+9Ue+/vSLvv70lEmJLRO+/vQnvv73vv71T77+9ASfvv73vv73vv71B77+9fe+/vSvvv71H05cj77+977+9ce+/vdyy77+9ZO+/vR5777+9ci9OQiEQW++/ve+/vQ4OQV7vv70677+9AO+/vUrvv73vv70M77+977+977+9fQl877+9fzPvv71K77+977+9Ju+/vQDvv71K77+9F++/vTTlhKrvv73vv71C77+977+9Mu+/ve+/ve+/ve+/ve+/vUDvv73vv71ebe+/ve+/ve+/vWXvv70977+9JO+/vTUV77+9eAvvv73vv71xFC4977+93bNGA++/ve+/vUjvv71rIMSdQ++/ve+/ve+/vWIW77+977+977+945yBTO+/ve+/ve+/vV5v77+9GyxJ77+977+9Ty7vv73vv714wpLvv73vv71hDe+/ve+/vVFwOO+/ve+/ve+/ve+/vVECau+/vU55Qw5J77+977+9yK5w77+9BW9THe+/ve+/ve+/vTDvv73vv73vv71j77+9ejvvv73vv70FUu+/vVLvv73vv71BBE8LLk8o77+9HuSAv8SFZ++/vRte77+977+9Ru+/ve+/ve+/ve+/vUDvv70/77+977+977+977+977+9TO+/vSrvv73vv73vv73vv70Bcl89E3Pvv73vv701fu+/vce5XUbvv73vv71477+977+9bMS077+977+977+9b1Tvv73vv71/77+9Be+/vR7vv73GgTnvv73vv70tb0zRjyRL77+9J++/vQ7vv73Ns++/vTfvv71y77+9L29aEu+/ve+/ve+/vXMhPiFl77+977+9fu+/vQIAFe+/vT/vv73vv70w77+9BlIw77+9BDrvv70DAgECAg0B77+92KTvv70tKygROe+/ve+/vU0wDQYJKu+/vUjvv73vv70NAQEMBQAwTDEgMB4GA1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjYxEzARBgNVBAoTCkdsb2JhbFNpZ24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMTgwNDE4MDAwMDAwWhcNMzQxMjEwMDAwMDAwWjBXMQswCQYDVQQGEwJCRTEZMBcGA1UEChMQR2xvYmFsU2lnbiBudi1zYTEtMCsGA1UEAxMkR2xvYmFsU2lnbiBDQSBmb3IgQUFUTCAtIFNIQTM4NCAtIEc0MO+/vQIiMA0GCSrvv71I77+977+9DQEBAQUAA++/vQIPADDvv70CCgLvv70CAQDvv71wPcaQ77+9Ce+/vS7vv73vv73vv71W77+9IygfP2Tvv71g77+9V++/vV3vv73vv71zH++/ve+/ve+/vWwOTlDvv71x77+9KXdB77+9P03vv73vv73vv706TC54PXLvv70q77+977+9NjTvv70q77+9Du+/vQ84H0fvv70eUy1kNFTvv70L77+9OmHvv73vv71+77+977+977+9GmQy77+977+9DipOOkvvv70+77+977+9ZGVnImXvv73vv70577+9ODpJBC4x77+9Oh0077+9NR3vv70RS2M+cu+/vdad77+91phdIhsadxo9QH5E77+9A++/ve+/ve+/ve+/ve+/vQrvv73vv73vv73vv73vv73vv73vv73vv73vv71w77+977+9H++/vULvv73vv70qZe+/vTXvv73vv71F77+977+9eu+/vSHvv73vv71dHHB7Z0scBO+/vRzvv71I77+9cg3vv70VDe+/ve+/ve+/vTB377+9EmYXNO+/ve+/ve+/vRRJ77+977+9ZHhS77+977+977+977+9SUvvv73vv73vv70877+9PkcA77+977+977+9TO+/vXTvv73vv73vv706Le+/ve+/vVfvv73vv70mTe+/vUAb77+9f8yB77+977+9fu+/vQEFGRtbDQjvv73vv70L77+9F++/ve+/ve+/ve+/vShWzLfvv73vv71v77+9QQUuBu+/vWrvv71N77+977+9O++/vXPvv71X77+977+977+977+9QmcPfy0Ucu+/vV1w77+9ae+/vRnvv70e77+9Xe+/ve+/ve+/ve+/ve+/ve+/ve+/vXjvv73vv71wKQl+WGBC77+9GO+/vSjvv70P24wMPO+/ve+/vVYz77+9IGcsQHLvv716DO+/ve+/ve+/vSgaaO+/ve+/vXho77+9Ze+/vVLvv701SSXvv73Xse+/vXVI77+9A1jvv71sc++/vR7vv71LUz1a77+977+977+9CBjvv71oTu+/vc6hN++/vRLvv71XzKA+EUjvv73vv73vv70nPhlJQu+/vWhxMTrvv70kfu+/ve+/vSsM77+9Oyjvv73vv73vv713YFvvv70677+9Fe+/vQVf77+977+9N++/vXpnCzh777+977+91anvv73vv73vv73Rin3vv73vv73vv73vv70MPSjFlBhA77+9G0Dvv73vv73vv73vv70977+9RSsCAwEAAe+/ve+/vQEmMO+/vQEiMA4GA1UdDwEB77+9BAQDAgHvv70wDwYDVR0TAQHvv70EBTADAQHvv70wHQYDVR0OBBYEFO+/ve+/vXVxel9HG++/vSPckErvv73vv73vv70mNgjvv70wHwYDVR0jBBgwFu+/vRTvv71sBe+/ve+/vRPvv73vv73vv73vv70c77+977+977+9f++/vWdT77+9MD4GCCsGAQUFBwEBBDIwMDAuBggrBgEFBQcwAe+/vSJodHRwOi8vb2NzcDIuZ2xvYmFsc2lnbi5jb20vcm9vdHI2MDYGA1UdHwQvMC0wK++/vSnvv70n77+9JWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yNi5jcmwwRwYDVR0gBEAwPjA8BgRVHSAAMDQwMgYIKwYBBQUHAgEWJmh0dHBzOi8vd3d3Lmdsb2JhbHNpZ24uY29tL3JlcG9zaXRvcnkvMA0GCSrvv71I77+977+9DQEBDAUAA++/vQIBADzTlUVzXu+/vdevDe+/vXVr77+9Xe+/ve+/vUvvv73DsT/vv73vv73vv71mPEbvv70hZw4Iae+/ve+/ve+/vS7vv71ONlLvv73vv713Ce+/vSLvv70077+977+977+977+9PUw9TO+/ve+/ve+/vWBI77+977+9ZzlzQyLvv73vv71U77+93Ijvv73vv73vv73vv73vv71t77+9Fe+/ve+/ve+/ve+/vQHvv70IVw4fI++/vV3vv73vv71277+9Ve+/vSIi77+977+9JXjUpe+/vR7vv73vv70yewoC77+977+9VhlFDH9N77+977+9LW7vv73eudi877+9I++/vQTvv73vv73vv73vv71R77+977+9cO+/ve+/ve+/ve+/ve+/vciw77+9IO+/vcqsWO+/vWDvv73vv73jiLLvv71BS0bvv73vv73vv71+77+9GjTvv717C0AoMe+/ve+/vTLvv71R77+977+977+9EcurD2Dvv702RGMc77+9dFUlVmXvv73OpBDvv70kI++/ve+/ve+/vQ4zTjLvv73Vn++/vTfvv73vv71qJyLvv71B77+9zZg9UDch77+9G++/vWEd77+977+977+9I++/vc6xEO+/ve+/vT5477+977+977+9G++/ve+/ve+/vW/vv70N77+977+9EQx977+977+9Mu+/ve+/vVHvv73vv73vv70RU2x977+977+977+977+9Z++/ve+/ve+/ve+/ve+/ve+/vWXvv70u77+9Oe+/vTtGKe+/vUZH77+977+977+9HjReZ++/ve+/vUlK77+977+9LjHvv73vv71D77+977+977+9Lu+/ve+/ve+/vUDvv71ZRcml77+977+9PS7vv73vv73vv70C77+977+977+977+9fDo377+9RO+/ve+/vW5PHO+/ve+/ve+/ve+/ve+/vX7njInvv70tKO+/ve+/ve+/vTxmb++/vShC77+9AAbvv70R77+9Xe+/vTkFOu+/vTzvv71m77+9QQMj77+9Xe+/vRHvv71u77+977+9LlYNN++/ve+/vVvvv73vv71TBSsmMwnvv71F77+9ZW3vv73vv73vv71p77+9byoQ77+9QUkJ77+977+9BB0EKWAWBe+/vT1g77+9Ou+/vRHvv73vv73vv71RSu+/ve+/vUBPCO+/vUZYLu+/vRJ0TicBTO+/ve+/vSVxS0MT77+977+9He+/ve+/vRUkdAob77+9K0wC77+9cO+/vWHvv71xQTDvv70F77+9MO+/vQNr77+9AwIBAgIORe+/vQPvv70zw4VlSO+/ve+/vUVRMA0GCSrvv71I77+977+9DQEBDAUAMEwxIDAeBgNVBAsTF0dsb2JhbFNpZ24gUm9vdCBDQSAtIFI2MRMwEQYDVQQKEwpHbG9iYWxTaWduMRMwEQYDVQQDEwpHbG9iYWxTaWduMB4XDTE0MTIxMDAwMDAwMFoXDTM0MTIxMDAwMDAwMFowTDEgMB4GA1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjYxEzARBgNVBAoTCkdsb2JhbFNpZ24xEzARBgNVBAMTCkdsb2JhbFNpZ24w77+9AiIwDQYJKu+/vUjvv73vv70NAQEBBQAD77+9Ag8AMO+/vQIKAu+/vQIBAO+/vQfvv71z77+9Zu+/ve+/vRTvv717PO+/vQ0I77+9RQss77+977+9SO+/ve+/vVs877+977+977+9Qe+/vTMU77+9b3/vv70q77+9xrDvv71rxbbvv73vv73Gsu+/vRTvv71RFCHvv71K77+9G1rvv73Wh++/vU06FQbvv71kZgvvv73vv73vv71E77+9c++/vU7vv71/T3hjCO+/vRJQbUJmL03vv715KE1SGu+/vRrvv73vv70Z77+9Dn7Eiu+/vWRMIRxDaO+/vT0877+9xbJm1ZDvv73vv70xBsW+77+9bTIG77+9Hu+/ve+/veuqo++/ve+/ve+/ve+/vWNQ77+977+9GO+/ve+/ve+/vQ9577+977+9Hyrvv71wLnvnvJPvv71tU++/vUh877+9EAc477+9Zu+/vXdhfu+/ve+/vTzvv73vv73vv73vv73vv71KEgdt77+977+977+977+977+90KBhd++/vVh077+977+9Izrvv71dOsqi250J77+9XUQt77+977+977+9V++/ve+/vX7vv71QBGM077+9a++/vRjvv71rNu+/vTnvv70kNu+/ve+/ve+/vRwTV++/ve+/vd6y77+94oW3c++/ve+/vTXvv71F77+977+977+9Nu+/vW9U77+977+9clZuLu+/ve+/vVFCRBXvv73vv73vv70477+977+9Tk5aC0fvv70GNkl3MO+/vXE377+977+9IQh177+977+9YRY/d++/vdmR77+977+9Cmzvv70CTXTvv70U77+977+9Oe+/ve+/ve+/vV4U77+9BO+/vQvvv73vv73vv73vv71uC++/vQjvv71hZglq77+9Bjpl77+9We+/ve+/vTXvv73vv73vv70o77+9GhHvv71w77+9Cu+/ve+/vXUd77+9Ou+/vQUA77+924Dvv70l77+977+9Be+/vSdZTHY5W++/ve+/ve+/ve+/vdiDD++/ve+/ve+/vTAR77+977+977+9M0jvv73vv71tZBQselhP77+9SwhJxZVkGmMOeT3vv73vv73vv73vv71Y77+977+9QkV5bg7vv70ZXFTvv71l77+977+977+977+977+9E++/vQ1v77+9Lu+/vWduyYsR77+977+9FO+/vQAZcO+/vXnvv73vv73vv73vv70aJ++/vTceMgfvv70UYzwoTO+/vQIDAQAB77+9YzBhMA4GA1UdDwEB77+9BAQDAgEGMA8GA1UdEwEB77+9BAUwAwEB77+9MB0GA1UdDgQWBBTvv71sBe+/ve+/vRPvv73vv73vv73vv70c77+977+977+9f++/vWdT77+9MB8GA1UdIwQYMBbvv70U77+9bAXvv73vv70T77+977+977+977+9HO+/ve+/ve+/vX/vv71nU++/vTANBgkq77+9SO+/ve+/vQ0BAQwFAAPvv70CAQDvv70l77+977+977+977+977+9Us2e77+9BO+/ve+/vWnvv71c0ITvv73cre+/vU/vv71HeO+/vWXvv73vv71b77+9PO+/vXwC77+977+9bu+/vRZz77+9X++/vVTvv73vv71077+977+977+977+9Ee+/ve+/vSMYPe+/ve+/vXJE77+977+977+9Xu+/vXvvv73vv714FkMTVlfvv73vv73vv70777+9d++/vUBy77+977+977+9NT7vv70IIe+/ve+/ve+/vUM3eTLvv73vv73vv70sTO+/vUMp77+977+9MNOsIe+/ve+/vR3vv73vv70HM3ZUACIq77+9TSAucGjvv73vv71T77+977+9XNOd77+977+9RAxEZu+/ve+/ve+/vUYAGm0C77+9JV3vv73vv70xUe+/vVRGHE3bme+/ve+/vRocBFzvv70V77+9eO+/vXnvv71d77+9Pu+/vUxV77+977+9Fe+/vW/vv73vv73vv71wMO+/ve+/ve+/vUJG77+9wpMF77+977+9fWN7P++/vXHvv718AOiYrg54NO+/vSXvv73vv70K77+9IGvvv707E++/vRLvv73vv71BGkh6c++/vXdpx7Zcf++/ve+/vR7vv71YGygr77+9bO+/vV5t77+9Be+/vXvvv73vv73vv70lN++/vQLvv71o77+9Ql3vv73vv73vv73vv73vv73vv71Qde+/vTZp77+977+9ewTvv71uBmnvv73vv70KCUhZ77+977+9exRgemTvv71pQ++/ve+/vUzvv70Y77+9bO+/vVMt77+977+977+9Xu+/vXI+77+9VMi9Z++/vQ9MRe+/vdO5MCMHTO+/vRDvv73vv73vv73ZmVrvv73vv71XHO+/vcy7Fe+/vVPvv70sBQ/vv73Enhnvv70YNO+/vUzvv73vv73vv73vv70f77+9JO+/vQR477+9A++/ve+/ve+/ve+/vV9877+9Su+/ve+/vXQl77+977+9Pkvvv70sVu+/ve+/ve+/ve+/vTjvv71c77+977+9ee+/ve+/ve+/ve+/vXQtYQEgfn7vv73vv71PB1lf77+9LUNS77+9Rgzvv73vv73vv71mR3l377+9VFsf77+9JDfvv71FWk7vv71ESO+/vdiw77+977+9Fe+/vQnvv73vv71JSe+/vWXvv73vv70acW7vv73vv73vv73vv71FPmzvv70C77+9Cmfvv70FWsmkEDHvv70C77+9MO+/vQLvv70CAQEwZzBXMQswCQYDVQQGEwJCRTEZMBcGA1UEChMQR2xvYmFsU2lnbiBudi1zYTEtMCsGA1UEAxMkR2xvYmFsU2lnbiBDQSBmb3IgQUFUTCAtIFNIQTM4NCAtIEc0AgxH77+9Uu+/vS/vv71477+9dGZFLzANBglg77+9SAFlAwQCAwUA77+977+9AUcwGgYJKu+/vUjvv73vv70NAQkDMQ0GCyrvv71I77+977+9DQEJEAEEME8GCSrvv71I77+977+9DQEJBDFCBEAi77+977+977+9B++/ve+/vVwf77+977+9bCcV77+977+977+977+9JO+/vWMl77+9x6c377+9MUXvv73vv71V77+9by9a77+9M++/ve+/vR1R77+9R++/vVwVTCVX77+9fhEk77+9ae+/ve+/vXoU77+9WzDvv73vv70GCyrvv71I77+977+9DQEJEAIvMe+/ve+/vTDvv73vv70w77+977+9MO+/ve+/vTANBglg77+9SAFlAwQCAwUABEAIWhjvv73vv73vv70jTO+/ve+/vV5N77+9eFzvv70R77+9b2fvv71/77+9ZOu3je+/ve+/ve+/vXFjJBx177+9ZQFFDlPvv70R77+9JljDte+/ve+/ve+/vWtIUu+/vWhCUhYFZxdUJjBrMFvvv71ZMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWduIG52LXNhMS0wKwYDVQQDEyRHbG9iYWxTaWduIENBIGZvciBBQVRMIC0gU0hBMzg0IC0gRzQCDEfvv71S77+9L++/vXjvv710ZkUvMA0GCSrvv71I77+977+9DQEBAQUABO+/vQEA77+9D3bvv73vv70277+977+9Wlvvv70r77+9zqtn77+9MDPvv73vv73vv71e77+9P++/vUIaIBzvv73vv70677+9Oizvv73vv73vv73vv73vv73vv73vv70P15Xvv73Nou+/vS3vv70FFBsl77+9DnIHbHYW77+977+9RO+/vS/vv709Ktu/77+9VgJoQ2phST3vv73vv70t77+9Ni5ARGJpKu+/ve+/vWzvv73vv70r77+977+9eu+/ve+/vceS77+9ae+/ve+/ve+/ve+/ve+/vciIQDvvv73vv702d11R77+977+977+9IWzLo+mTpU9uHAst77+9Gu+/ve+/vXl3JHZkYkRZ77+977+9KE0N77+9JcaY77+9EWnvv73vv73vv70BTO+/ve+/ve+/vQdo77+977+977+977+9IQXvv73vv70bzYgy77+9Pe+/ve+/vQ5GKO+/vUzvv73vv73UuUzvv71cGe+/vVDvv71CM++/vXsE77+9RU3vv73vv73vv70A77+9fu+/vQLvv73vv70QFO+/ve+/ve+/ve+/vRjvv70177+977+9SQZsDu+/vRjvv73vv71LX++/ve+/vUDvv73vv70nY++/vSvvv70877+9RQ==",
        certExpirationDate: "2032-05-10T00:00:00.000+00:00",
        adobeRevocationInfoArchival: [],
        certs: [
          {
            version: "3",
            serialnumber: "478752be2f8378f47466452f",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            notbefore: "2021-02-10T00:00:00.000Z",
            notafter: "2032-05-10T00:00:00.000Z",
            subject:
              "CN=SEIKO Timestamp Service. Accredited A2W02-008,OU=SEIKO Timestamp Authority,O=SEIKO Solutions Inc.,L=Chiba,ST=Chiba,C=JP",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082010a0282010100c5f7e9c82c18b95671961c6baa4da9d53fa9020956f80d5be43b57386ca751fd0494c1055ddfdb2c33e9a03271b90402915f5dff695e860ed8bd36e300faa2ff454b2725571acfd226ff8e2b2077c748255b440358b5f59ad2cdb6a5d72cb418ba538ef2b1594385691a3c02e83d44ae7b6e4aabd3033ba16e8f897f23ce8fa50fe2a8e4e330a04ead8b68d875038ffab44842aab708f7d64c4e9b2d02506e811b881b4164e1c83899caede0049de4b1a1902797ea1561c4e2e275fb7fbb43c6e45ea31c4480d9dd6ec5ff0753810fdaba5562ce3ce4dd54bbd0a61f33a3b06de52d27a41db64e26264faccc8b692ba987dd61532a56edfe5b6db8c621019e090203010001",
            crldp: "http://crl.globalsign.com/ca/gsaatlsha2g4.crl",
            thumbprint: "87ea1d055ab126fbcb32e911e3bdc26e629d23c1",
          },
          {
            version: "3",
            serialnumber: "01e9d8a4a62d2b28113982a94d",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            notbefore: "2018-04-18T00:00:00.000Z",
            notafter: "2034-12-10T00:00:00.000Z",
            subject:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082020a0282020100af703dc690ca09c32efa8ca656bb23281f3f648c60db579b5dfda2731faa87a86c0e4e50fe71f6297741d83f4db5ef9ef03a4c2e783d729e2a9cb03634f02a950ee50f381f47e51e532d643454a60baa3a61a9aa7e98a4d11a6432979d0e2a4e3a4be63eefafdc6465672265fbcd39b3383a49042e31863a1d34ed351dba114b633e72e2d69d94d6985d221b1a771a3d407e44d40384d5fef6810ae4cef8bacce8c8d7cb70fbff1f8c42d9e99e2a65803589bc45f9d37ad421fa9f5d1c707b674b1c04a21ce648eb720db3150da1addd3077e61266173489f6c31449aeeebf647852f1a4fdfb8c494bb7ae923cfb3e47008184fd4cbd74e2f0d53a2dc0d5578692264de49d401bc17fcc81d7e07e890105191b5b0d08d5cc0bbd1783c082a12856ccb7a88c6ff09041052e06d16aaa4dd1fb3be873ba57b394c8f742670f7f2d1472d35d70f869a419da1ee85dfcf683edc3e8c378e8c97029097e586042d818f828c20fdb8c0c3cc0ec9d56339920672c4072a07a0c9e8dad281a68c9cb7868a365e397529c354925d3d7b1b87548d00358986c73c41efd4b533d5a87a5b00818bc684ef8cea13781129857cca03e1148a6bfef273e1949429c6871313ae9247ec0d22b0c923b288693ec77605bcc3ab715dc055fefeb9237937a670b387bacd7d5a9e6c7c5d18a7d8ac2f4c40c3d28c5941840f31b40aae5a6eef53dc3452b0203010001",
            crldp: "http://crl.globalsign.com/root-r6.crl",
            thumbprint: "830a62ddeeaf0630be033d41dbc1310f3b7f74a0",
          },
          {
            version: "3",
            serialnumber: "45e6bb038333c3856548e6ff4551",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            notbefore: "2014-12-10T00:00:00.000Z",
            notafter: "2034-12-10T00:00:00.000Z",
            subject: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082020a02820201009507e873ca66f9ec14ca7b3cf70d08f1b4450b2c82b448c6eb5b3cae83b841923314a46f7fe92accc6b0886bc5b689d1c6b2ff14ce511421ec4add1b5ac6d687ee4d3a1506ed64660b9280ca44de73944ef3a7897f4f786308c812506d42662f4db979284d521a8a1a80b719810e7ec48abc644c211c4368d73d3c8ac5b266d5909ab73106c5bee26d3206a61ef9b9ebaaa3b8bfbe826350d0f01889dfe40f79f5eaa21f2ad2702e7be7bc93bb6d53e2487c8c100738ff66b277617ee0ea8c3caab4a4f6f3954a12076dfd8cb289cfd0a06177c85874b0d4233af75d3acaa2db9d09de5d442d90f181cd5792fa7ebc50046334df6b9318be6b36b239e4ac2436b7f0efb61c135793b6deb2f8e285b773a2b835aa45f2e09d36a16f548af172566e2e88c55142441594eea3c538969b4e4e5a0b47f30636497730bc7137e5a6ec210875fce661163f77d5d99197840a6cd4024d74c014edfd39fb83f25e14a104b00be9feee8fe16e0bb208b36166096ab1063a659659c0f035fdc9da288d1a118770810aa89a751d9e3a8605009edb80d625f9dc059e27594c76395beaf9a5a1d8830fd1ffdf3011f985cf3348f5ca6d64142c7a584fd34b0849c595641a630e793df5b38cca58ad9c4245796e0e87195c54b165b6bf8c9bdc13e90d6fb82edc676ec98b11b584148a0019708379919791d41a27bf371e3207d814633c284caf0203010001",
            thumbprint: "8094640eb5a7a1ca119c1fddd59f810263a7fbd1",
          },
        ],
      },
    ],
    dsses: [
      {
        crls: [
          {
            version: "2",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
            thisupdate: "2022-01-28T03:37:04.000Z",
            nextupdate: "2022-02-04T03:37:04.000Z",
            revokedcertificates: "(omitted)",
          },
          {
            version: "2",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            thisupdate: "2022-01-28T02:30:13.000Z",
            nextupdate: "2022-02-04T02:30:13.000Z",
            revokedcertificates: "(omitted)",
          },
          {
            version: "2",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            thisupdate: "2022-01-07T00:00:00.000Z",
            nextupdate: "2022-04-15T00:00:00.000Z",
            revokedcertificates: "(omitted)",
          },
        ],
        vri: [
          {
            key: "024F1B4BB19B3E2593F38FEB372C7CB57596F5E0",
            certs: [
              {
                version: "3",
                serialnumber: "659b5bf88e76eb1bcbc77f8e",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer:
                  "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
                notbefore: "2021-05-28T04:57:43.000Z",
                notafter: "2022-06-28T04:57:43.000Z",
                subject:
                  "1.2.840.113549.1.9.1=#1617696e666f407365696b6f2d637962657274696d652e6a70,CN=SEIKO Cyber Time, Time Stamp Service,O=SEIKO Solutions Inc.,OU=Cyber Time Center,L=Chiba,ST=Chiba,C=JP",
                subjectaltname: "info@seiko-cybertime.jp",
                publickeyalgorithm: "1.2.840.113549.1.1.1",
                publickeyvalue:
                  "3082010a0282010100994f1ccbd83bcf358331a9bf03ca1b155b9aeadba501db86669413792d31194748562033ad6f5b7d84a5f750878d00ec7cc1fda5f6a96ff1dea79f85a612761e1d178a906064332ec202d5806a242e0c6256f00975844d224a36587e285e1b413b2af3355b2358c6485e7743c4c7c090584b8ee3c13c0c8f439225eaa8cd559c97bc77459c6e4222b7211ea15c149e9754a03d4fbc8e61f0b507c01764aa98670a0d2604d6fcfd4add1e62605ee46b08cf1e0676b6afa495695b9758e2f94b9a3368eedc990fedfb40d43d0f57c69738bec60eb9378a412727c69f3fe65d384b86c08611706dc2ab739bea017082c473c1db0438c395c74360d6cc55d41a12970203010001",
                crldp: "http://crl.globalsign.com/gsgccr6aatlca2020.crl",
                thumbprint: "c7caa8754bbf0ec8a8012da106ee2e38b96603df",
              },
              {
                version: "3",
                serialnumber: "784aa90afb8ffbbc545b4b28b7fca353",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer:
                  "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
                notbefore: "2020-09-16T00:00:00.000Z",
                notafter: "2030-09-16T00:00:00.000Z",
                subject:
                  "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
                publickeyalgorithm: "1.2.840.113549.1.1.1",
                publickeyvalue:
                  "3082010a0282010100c235269d784fde730623885ebb4375bc04e68fa85b4f0e248e71d6cf997ee17e8dca5f85b3893cf2bde4887d853a96409125b8cde054f493babea54813009ef22852939e81eec0714886dc37fcb9a6d068fb386fc01830f94f2325f98c292d78e5021aa9036650c90c8e676012b5a8adf6e9750a155fcd1fcd21c7057e1e88684012e1b457d0ebc80aacc0efc05ed2e7bab869d68fc0eda0138ecc1d426f43649bb631a3c7b0c237cd2ab47a5718c0c9211f41a68ba7a7608d40c1b894da72f91fc961c66ce43b2f8f390b0bece7f0bee1cd3ce3a6f87e956f37fd45ea1e65f08fcbf04bfd566d6e918fa19b909844d35c81a6f45f0836033f66b84344d03d8d0203010001",
                crldp: "http://crl.globalsign.com/ca/gsaatlsha2g4.crl",
                thumbprint: "29021ef5eb4a7ad838da8ea5fa936fb3e9aee032",
              },
              {
                version: "3",
                serialnumber: "01e9d8a4a62d2b28113982a94d",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
                notbefore: "2018-04-18T00:00:00.000Z",
                notafter: "2034-12-10T00:00:00.000Z",
                subject:
                  "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
                publickeyalgorithm: "1.2.840.113549.1.1.1",
                publickeyvalue:
                  "3082020a0282020100af703dc690ca09c32efa8ca656bb23281f3f648c60db579b5dfda2731faa87a86c0e4e50fe71f6297741d83f4db5ef9ef03a4c2e783d729e2a9cb03634f02a950ee50f381f47e51e532d643454a60baa3a61a9aa7e98a4d11a6432979d0e2a4e3a4be63eefafdc6465672265fbcd39b3383a49042e31863a1d34ed351dba114b633e72e2d69d94d6985d221b1a771a3d407e44d40384d5fef6810ae4cef8bacce8c8d7cb70fbff1f8c42d9e99e2a65803589bc45f9d37ad421fa9f5d1c707b674b1c04a21ce648eb720db3150da1addd3077e61266173489f6c31449aeeebf647852f1a4fdfb8c494bb7ae923cfb3e47008184fd4cbd74e2f0d53a2dc0d5578692264de49d401bc17fcc81d7e07e890105191b5b0d08d5cc0bbd1783c082a12856ccb7a88c6ff09041052e06d16aaa4dd1fb3be873ba57b394c8f742670f7f2d1472d35d70f869a419da1ee85dfcf683edc3e8c378e8c97029097e586042d818f828c20fdb8c0c3cc0ec9d56339920672c4072a07a0c9e8dad281a68c9cb7868a365e397529c354925d3d7b1b87548d00358986c73c41efd4b533d5a87a5b00818bc684ef8cea13781129857cca03e1148a6bfef273e1949429c6871313ae9247ec0d22b0c923b288693ec77605bcc3ab715dc055fefeb9237937a670b387bacd7d5a9e6c7c5d18a7d8ac2f4c40c3d28c5941840f31b40aae5a6eef53dc3452b0203010001",
                crldp: "http://crl.globalsign.com/root-r6.crl",
                thumbprint: "830a62ddeeaf0630be033d41dbc1310f3b7f74a0",
              },
              {
                version: "3",
                serialnumber: "45e6bb038333c3856548e6ff4551",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
                notbefore: "2014-12-10T00:00:00.000Z",
                notafter: "2034-12-10T00:00:00.000Z",
                subject:
                  "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
                publickeyalgorithm: "1.2.840.113549.1.1.1",
                publickeyvalue:
                  "3082020a02820201009507e873ca66f9ec14ca7b3cf70d08f1b4450b2c82b448c6eb5b3cae83b841923314a46f7fe92accc6b0886bc5b689d1c6b2ff14ce511421ec4add1b5ac6d687ee4d3a1506ed64660b9280ca44de73944ef3a7897f4f786308c812506d42662f4db979284d521a8a1a80b719810e7ec48abc644c211c4368d73d3c8ac5b266d5909ab73106c5bee26d3206a61ef9b9ebaaa3b8bfbe826350d0f01889dfe40f79f5eaa21f2ad2702e7be7bc93bb6d53e2487c8c100738ff66b277617ee0ea8c3caab4a4f6f3954a12076dfd8cb289cfd0a06177c85874b0d4233af75d3acaa2db9d09de5d442d90f181cd5792fa7ebc50046334df6b9318be6b36b239e4ac2436b7f0efb61c135793b6deb2f8e285b773a2b835aa45f2e09d36a16f548af172566e2e88c55142441594eea3c538969b4e4e5a0b47f30636497730bc7137e5a6ec210875fce661163f77d5d99197840a6cd4024d74c014edfd39fb83f25e14a104b00be9feee8fe16e0bb208b36166096ab1063a659659c0f035fdc9da288d1a118770810aa89a751d9e3a8605009edb80d625f9dc059e27594c76395beaf9a5a1d8830fd1ffdf3011f985cf3348f5ca6d64142c7a584fd34b0849c595641a630e793df5b38cca58ad9c4245796e0e87195c54b165b6bf8c9bdc13e90d6fb82edc676ec98b11b584148a0019708379919791d41a27bf371e3207d814633c284caf0203010001",
                thumbprint: "8094640eb5a7a1ca119c1fddd59f810263a7fbd1",
              },
              {
                version: "3",
                serialnumber: "478752be2f8378f47466452f",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer:
                  "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
                notbefore: "2021-02-10T00:00:00.000Z",
                notafter: "2032-05-10T00:00:00.000Z",
                subject:
                  "CN=SEIKO Timestamp Service. Accredited A2W02-008,OU=SEIKO Timestamp Authority,O=SEIKO Solutions Inc.,L=Chiba,ST=Chiba,C=JP",
                publickeyalgorithm: "1.2.840.113549.1.1.1",
                publickeyvalue:
                  "3082010a0282010100c5f7e9c82c18b95671961c6baa4da9d53fa9020956f80d5be43b57386ca751fd0494c1055ddfdb2c33e9a03271b90402915f5dff695e860ed8bd36e300faa2ff454b2725571acfd226ff8e2b2077c748255b440358b5f59ad2cdb6a5d72cb418ba538ef2b1594385691a3c02e83d44ae7b6e4aabd3033ba16e8f897f23ce8fa50fe2a8e4e330a04ead8b68d875038ffab44842aab708f7d64c4e9b2d02506e811b881b4164e1c83899caede0049de4b1a1902797ea1561c4e2e275fb7fbb43c6e45ea31c4480d9dd6ec5ff0753810fdaba5562ce3ce4dd54bbd0a61f33a3b06de52d27a41db64e26264faccc8b692ba987dd61532a56edfe5b6db8c621019e090203010001",
                crldp: "http://crl.globalsign.com/ca/gsaatlsha2g4.crl",
                thumbprint: "87ea1d055ab126fbcb32e911e3bdc26e629d23c1",
              },
            ],
            crls: [
              {
                version: "2",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer:
                  "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
                thisupdate: "2022-01-28T03:37:04.000Z",
                nextupdate: "2022-02-04T03:37:04.000Z",
                revokedcertificates: "(omitted)",
              },
              {
                version: "2",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer:
                  "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
                thisupdate: "2022-01-28T02:30:13.000Z",
                nextupdate: "2022-02-04T02:30:13.000Z",
                revokedcertificates: "(omitted)",
              },
              {
                version: "2",
                signaturealgorithm: "1.2.840.113549.1.1.12",
                issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
                thisupdate: "2022-01-07T00:00:00.000Z",
                nextupdate: "2022-04-15T00:00:00.000Z",
                revokedcertificates: "(omitted)",
              },
            ],
          },
        ],
        certs: [
          {
            version: "3",
            serialnumber: "659b5bf88e76eb1bcbc77f8e",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
            notbefore: "2021-05-28T04:57:43.000Z",
            notafter: "2022-06-28T04:57:43.000Z",
            subject:
              "1.2.840.113549.1.9.1=#1617696e666f407365696b6f2d637962657274696d652e6a70,CN=SEIKO Cyber Time, Time Stamp Service,O=SEIKO Solutions Inc.,OU=Cyber Time Center,L=Chiba,ST=Chiba,C=JP",
            subjectaltname: "info@seiko-cybertime.jp",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082010a0282010100994f1ccbd83bcf358331a9bf03ca1b155b9aeadba501db86669413792d31194748562033ad6f5b7d84a5f750878d00ec7cc1fda5f6a96ff1dea79f85a612761e1d178a906064332ec202d5806a242e0c6256f00975844d224a36587e285e1b413b2af3355b2358c6485e7743c4c7c090584b8ee3c13c0c8f439225eaa8cd559c97bc77459c6e4222b7211ea15c149e9754a03d4fbc8e61f0b507c01764aa98670a0d2604d6fcfd4add1e62605ee46b08cf1e0676b6afa495695b9758e2f94b9a3368eedc990fedfb40d43d0f57c69738bec60eb9378a412727c69f3fe65d384b86c08611706dc2ab739bea017082c473c1db0438c395c74360d6cc55d41a12970203010001",
            crldp: "http://crl.globalsign.com/gsgccr6aatlca2020.crl",
            thumbprint: "c7caa8754bbf0ec8a8012da106ee2e38b96603df",
          },
          {
            version: "3",
            serialnumber: "784aa90afb8ffbbc545b4b28b7fca353",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            notbefore: "2020-09-16T00:00:00.000Z",
            notafter: "2030-09-16T00:00:00.000Z",
            subject:
              "CN=GlobalSign GCC R6 AATL CA 2020,O=GlobalSign nv-sa,C=BE",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082010a0282010100c235269d784fde730623885ebb4375bc04e68fa85b4f0e248e71d6cf997ee17e8dca5f85b3893cf2bde4887d853a96409125b8cde054f493babea54813009ef22852939e81eec0714886dc37fcb9a6d068fb386fc01830f94f2325f98c292d78e5021aa9036650c90c8e676012b5a8adf6e9750a155fcd1fcd21c7057e1e88684012e1b457d0ebc80aacc0efc05ed2e7bab869d68fc0eda0138ecc1d426f43649bb631a3c7b0c237cd2ab47a5718c0c9211f41a68ba7a7608d40c1b894da72f91fc961c66ce43b2f8f390b0bece7f0bee1cd3ce3a6f87e956f37fd45ea1e65f08fcbf04bfd566d6e918fa19b909844d35c81a6f45f0836033f66b84344d03d8d0203010001",
            crldp: "http://crl.globalsign.com/ca/gsaatlsha2g4.crl",
            thumbprint: "29021ef5eb4a7ad838da8ea5fa936fb3e9aee032",
          },
          {
            version: "3",
            serialnumber: "01e9d8a4a62d2b28113982a94d",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            notbefore: "2018-04-18T00:00:00.000Z",
            notafter: "2034-12-10T00:00:00.000Z",
            subject:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082020a0282020100af703dc690ca09c32efa8ca656bb23281f3f648c60db579b5dfda2731faa87a86c0e4e50fe71f6297741d83f4db5ef9ef03a4c2e783d729e2a9cb03634f02a950ee50f381f47e51e532d643454a60baa3a61a9aa7e98a4d11a6432979d0e2a4e3a4be63eefafdc6465672265fbcd39b3383a49042e31863a1d34ed351dba114b633e72e2d69d94d6985d221b1a771a3d407e44d40384d5fef6810ae4cef8bacce8c8d7cb70fbff1f8c42d9e99e2a65803589bc45f9d37ad421fa9f5d1c707b674b1c04a21ce648eb720db3150da1addd3077e61266173489f6c31449aeeebf647852f1a4fdfb8c494bb7ae923cfb3e47008184fd4cbd74e2f0d53a2dc0d5578692264de49d401bc17fcc81d7e07e890105191b5b0d08d5cc0bbd1783c082a12856ccb7a88c6ff09041052e06d16aaa4dd1fb3be873ba57b394c8f742670f7f2d1472d35d70f869a419da1ee85dfcf683edc3e8c378e8c97029097e586042d818f828c20fdb8c0c3cc0ec9d56339920672c4072a07a0c9e8dad281a68c9cb7868a365e397529c354925d3d7b1b87548d00358986c73c41efd4b533d5a87a5b00818bc684ef8cea13781129857cca03e1148a6bfef273e1949429c6871313ae9247ec0d22b0c923b288693ec77605bcc3ab715dc055fefeb9237937a670b387bacd7d5a9e6c7c5d18a7d8ac2f4c40c3d28c5941840f31b40aae5a6eef53dc3452b0203010001",
            crldp: "http://crl.globalsign.com/root-r6.crl",
            thumbprint: "830a62ddeeaf0630be033d41dbc1310f3b7f74a0",
          },
          {
            version: "3",
            serialnumber: "45e6bb038333c3856548e6ff4551",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            notbefore: "2014-12-10T00:00:00.000Z",
            notafter: "2034-12-10T00:00:00.000Z",
            subject: "CN=GlobalSign,O=GlobalSign,OU=GlobalSign Root CA - R6",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082020a02820201009507e873ca66f9ec14ca7b3cf70d08f1b4450b2c82b448c6eb5b3cae83b841923314a46f7fe92accc6b0886bc5b689d1c6b2ff14ce511421ec4add1b5ac6d687ee4d3a1506ed64660b9280ca44de73944ef3a7897f4f786308c812506d42662f4db979284d521a8a1a80b719810e7ec48abc644c211c4368d73d3c8ac5b266d5909ab73106c5bee26d3206a61ef9b9ebaaa3b8bfbe826350d0f01889dfe40f79f5eaa21f2ad2702e7be7bc93bb6d53e2487c8c100738ff66b277617ee0ea8c3caab4a4f6f3954a12076dfd8cb289cfd0a06177c85874b0d4233af75d3acaa2db9d09de5d442d90f181cd5792fa7ebc50046334df6b9318be6b36b239e4ac2436b7f0efb61c135793b6deb2f8e285b773a2b835aa45f2e09d36a16f548af172566e2e88c55142441594eea3c538969b4e4e5a0b47f30636497730bc7137e5a6ec210875fce661163f77d5d99197840a6cd4024d74c014edfd39fb83f25e14a104b00be9feee8fe16e0bb208b36166096ab1063a659659c0f035fdc9da288d1a118770810aa89a751d9e3a8605009edb80d625f9dc059e27594c76395beaf9a5a1d8830fd1ffdf3011f985cf3348f5ca6d64142c7a584fd34b0849c595641a630e793df5b38cca58ad9c4245796e0e87195c54b165b6bf8c9bdc13e90d6fb82edc676ec98b11b584148a0019708379919791d41a27bf371e3207d814633c284caf0203010001",
            thumbprint: "8094640eb5a7a1ca119c1fddd59f810263a7fbd1",
          },
          {
            version: "3",
            serialnumber: "478752be2f8378f47466452f",
            signaturealgorithm: "1.2.840.113549.1.1.12",
            issuer:
              "CN=GlobalSign CA for AATL - SHA384 - G4,O=GlobalSign nv-sa,C=BE",
            notbefore: "2021-02-10T00:00:00.000Z",
            notafter: "2032-05-10T00:00:00.000Z",
            subject:
              "CN=SEIKO Timestamp Service. Accredited A2W02-008,OU=SEIKO Timestamp Authority,O=SEIKO Solutions Inc.,L=Chiba,ST=Chiba,C=JP",
            publickeyalgorithm: "1.2.840.113549.1.1.1",
            publickeyvalue:
              "3082010a0282010100c5f7e9c82c18b95671961c6baa4da9d53fa9020956f80d5be43b57386ca751fd0494c1055ddfdb2c33e9a03271b90402915f5dff695e860ed8bd36e300faa2ff454b2725571acfd226ff8e2b2077c748255b440358b5f59ad2cdb6a5d72cb418ba538ef2b1594385691a3c02e83d44ae7b6e4aabd3033ba16e8f897f23ce8fa50fe2a8e4e330a04ead8b68d875038ffab44842aab708f7d64c4e9b2d02506e811b881b4164e1c83899caede0049de4b1a1902797ea1561c4e2e275fb7fbb43c6e45ea31c4480d9dd6ec5ff0753810fdaba5562ce3ce4dd54bbd0a61f33a3b06de52d27a41db64e26264faccc8b692ba987dd61532a56edfe5b6db8c621019e090203010001",
            crldp: "http://crl.globalsign.com/ca/gsaatlsha2g4.crl",
            thumbprint: "87ea1d055ab126fbcb32e911e3bdc26e629d23c1",
          },
        ],
      },
    ],
    ebookLaw: {
      docHashValid: true,
      tstCertChainValid: true,
      tstEndEntityCertNotAfter: "2032-05-10T00:00:00.000+00:00",
      tstEndEntityCertSubject:
        "CN=SEIKO Timestamp Service. Accredited A2W02-008,OU=SEIKO Timestamp Authority,O=SEIKO Solutions Inc.,L=Chiba,ST=Chiba,C=JP",
      tstGenTime: "2022-01-28T05:25:31.193+00:00",
      tstMessageHash:
        "77+977+9XhEA77+9BAfvv71+Yxxa77+9bTo077+9Zh7Dtu+/vTwK77+977+977+9EO+/vVY=",
      tstMessageHashAlgo: "SHA-256",
      tstPolicy: "1.3.6.1.4.1.955.1.10.1.5.1",
      tstSignedAttrsValid: true,
    },
    targetTime: "2023-04-30",
    ownerPassword: "Aa@12345678",
    options: "INVALID_UNSIGNED",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
