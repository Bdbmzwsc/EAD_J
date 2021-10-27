using Android.App;
using Android.OS;
using Android.Runtime;
using AndroidX.AppCompat.App;
using Android.Widget;
using Android.Support.V4.App;

namespace EAJ
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);
            // Get our UI controls from the loaded layout
            
            Button translateButton = FindViewById<Button>(Resource.Id.button1);
            EditText edit = FindViewById<EditText>(Resource.Id.editText1);
            //   TextView textView=FindViewById<TextView>(Resource.Id.textView2)
            EditText editText = FindViewById<EditText>(Resource.Id.ed);
            // Add code to translate number
            translateButton.Click += (sender, e) =>
           {

               // Translate user's alphanumeric phone number to numeric
               try
               {

                   string jie = Core.Core.Md5Decrypt(edit.Text);
                           editText.Text = jie;
               }
               catch
               {
                   string jia = Core.Core.Md5Encrypt(edit.Text);
                   editText.Text = jia;
               }
           };
            
        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}