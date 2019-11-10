Minimum Versions
Android version - 7.1.4
IOS - 5.0
NPM - 6.4.1
Node - v10.13.0
Java - 8
Angular - 8
Ionic - 4.1.2
#System setup

##Java Installation

###Reference link -

https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04
###Setup Environment Variable :

sudo gedit ~/.bashrc
export JAVA_HOME=/usr/lib/jvm/java-8-oracle

sudo gedit /etc/environment
JAVA_HOME="/usr/lib/jvm/java-8-oracle"
##Nodejs and NPM install ###Follow the link to install Nodejs and NPM (min nodejs version should be greater than 8.9)

https://websiteforstudents.com/install-the-latest-node-js-and-nmp-packages-on-ubuntu-16-04-18-04-lts/
##Ionic Installation

npm install -g ionic cordova
##Android Studio Install

https://developer.android.com/studio/
###Command to run android studio to set up android sdk

cd android-studio/bin
open terminal
./studio.sh (follow the steps as it takes while building android studio)
Open SDK manager, select Android 8.1 (min required) and apply so that it install the required packages.
##Setup Android Environment Variable

sudo gedit ~/.bashrc
export ANDROID_HOME=/home/user_directory/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

sudo gedit /etc/environment
ANDROID_HOME="/home/directory/Android/Sdk"
##Gradle Install

sudo add-apt-repository ppa:cwchien/gradle
sudo apt-get update
sudo apt-get install gradle-ppa
export PATH=$PATH:/usr/lib/gradle/{gradle folder version}/bin
##Add Application Platform

To add android platform
sudo ionic cordova platform add android

To add ionic platform
sudo ionic cordova platform add ios

Run application on browser
sudo ionic serve

To build  android application 
sudo ionic cordova build andriod

To build  ios application 
sudo ionic cordova build ios