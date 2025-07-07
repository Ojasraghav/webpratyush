#include<iostream>
using namespace std;
int  main(){
//     int arr[]={1,2,3,4,5,6};
//     int num ,x=0 ,flag=0;
//     cout<<"Enter the num :";

//     cin>>num;
//     for(int i=0;i<9;i++){
//         x++;
//         if(arr[i]==num){
//             flag=1;
//             cout<<"found";
//         }
    
//     }
//     if(flag==0){
//         cout<<"element not found";

//     }


// }
 int a[100];
 int n;
 cin>>n;
 for(int i=0;i<n;i++){
    cin>>a[i];
 }
 int k;
 for(int i=k;i<=n;i++){
    a[i]=a[i+1];

 }
 n--;
 for(int i=0;i<n;i++){
    cout<<a[i]<<" ";
 }
return 0;
}
