@echo off
color 4
echo   __/\\\\____________/\\\\__________________/\\\\\\__________________________                                            
echo    _\/\\\\\\________/\\\\\\_________________\////\\\__________________________                                           
echo     _\/\\\//\\\____/\\\//\\\____________________\/\\\_________/\\\________/\\\_                                          
echo      _\/\\\\///\\\/\\\/_\/\\\___/\\\____/\\\_____\/\\\______/\\\\\\\\\\\__\///__                                         
echo       _\/\\\__\///\\\/___\/\\\__\/\\\___\/\\\_____\/\\\_____\////\\\////____/\\\_                                        
echo        _\/\\\____\///_____\/\\\__\/\\\___\/\\\_____\/\\\________\/\\\_______\/\\\_                                       
echo         _\/\\\_____________\/\\\__\/\\\___\/\\\_____\/\\\________\/\\\_/\\___\/\\\_                                      
echo          _\/\\\_____________\/\\\__\//\\\\\\\\\____/\\\\\\\\\_____\//\\\\\____\/\\\_                                     
echo           _\///______________\///____\/////////____\/////////_______\/////_____\///__                                    
echo   _________________________________________________________________________________________________                      
echo    _________________________________________________________________________________________________                     
echo     ______________________________________________________________/\\\______/\\\__________/\\\__/\\\_                    
echo      __/\\\____/\\\______/\\\\\\\\____/\\/\\\\\\\____/\\\\\\\\\\__\///____/\\\\\\\\\\\____\//\\\/\\\__                   
echo       _\//\\\__/\\\_____/\\\/////\\\__\/\\\/////\\\__\/\\\//////____/\\\__\////\\\////______\//\\\\\___                  
echo        __\//\\\/\\\_____/\\\\\\\\\\\___\/\\\___\///___\/\\\\\\\\\\__\/\\\_____\/\\\___________\//\\\____                 
echo         ___\//\\\\\_____\//\\///////____\/\\\__________\////////\\\__\/\\\_____\/\\\_/\\____/\\_/\\\_____                
echo          ____\//\\\_______\//\\\\\\\\\\__\/\\\___________/\\\\\\\\\\__\/\\\_____\//\\\\\____\//\\\\/______               
echo           _____\///_________\//////////___\///___________\//////////___\///_______\/////______\////________              
echo   __/\\\\\\\\\\\\\___________________________________________________/\\\________________________________________        
echo    _\/\\\/////////\\\________________________________________________\/\\\________________________________________       
echo     _\/\\\_______\/\\\______________________/\\\______________________\/\\\________________________________________      
echo      _\/\\\\\\\\\\\\\/____/\\\\\\\\\______/\\\\\\\\\\\______/\\\\\\\\__\/\\\______________/\\\\\\\\____/\\/\\\\\\\__     
echo       _\/\\\/////////_____\////////\\\____\////\\\////_____/\\\//////___\/\\\\\\\\\\_____/\\\/////\\\__\/\\\/////\\\_    
echo        _\/\\\________________/\\\\\\\\\\______\/\\\________/\\\__________\/\\\/////\\\___/\\\\\\\\\\\___\/\\\___\///__   
echo         _\/\\\_______________/\\\/////\\\______\/\\\_/\\___\//\\\_________\/\\\___\/\\\__\//\\///////____\/\\\_________  
echo          _\/\\\______________\//\\\\\\\\/\\_____\//\\\\\_____\///\\\\\\\\__\/\\\___\/\\\___\//\\\\\\\\\\__\/\\\_________ 
echo           _\///________________\////////\//_______\/////________\////////___\///____\///_____\//////////___\///__________
color a
echo Patching...
cd "C:\Multiversity\resources\app\dist-electron\app"
echo Moving to app dir.
del /Q Utility.js
echo Deleted Utility js file.
copy "%~dp0\files\Utility.js" "Utility.js"
echo Copied Utility js file.
echo Patch applied.
timeout /T 5
cls
color 4
echo ____/\\\\\\\\\__________/\\\\\\\\\\____/\\\\\\\\\\\\__________________________                                         
echo  __/\\\///////\\\______/\\\///////\\\__\/\\\////////\\\____/\\\________________                                        
echo   _\/\\\_____\/\\\_____\///______/\\\___\/\\\______\//\\\__\/\\\___________/\\\_                                       
echo    _\/\\\\\\\\\\\/_____________/\\\//____\/\\\_______\/\\\__\/\\\\\\\\_____\///__                                      
echo     _\/\\\//////\\\____________\////\\\___\/\\\_______\/\\\__\/\\\////\\\____/\\\_                                     
echo      _\/\\\____\//\\\______________\//\\\__\/\\\_______\/\\\__\/\\\\\\\\/____\/\\\_                                    
echo       _\/\\\_____\//\\\____/\\\______/\\\___\/\\\_______/\\\___\/\\\///\\\____\/\\\_                                   
echo        _\/\\\______\//\\\__\///\\\\\\\\\/____\/\\\\\\\\\\\\/____\/\\\_\///\\\__\/\\\_                                  
echo         _\///________\///_____\/////////______\////////////______\///____\///___\///__                                 
echo __/\\\\\\\\\\\\\___________________________________________________/\\\__________        
echo  _\/\\\/////////\\\________________________________________________\/\\\__________       
echo   _\/\\\_______\/\\\______________________/\\\______________________\/\\\__________     
echo    _\/\\\\\\\\\\\\\/____/\\\\\\\\\______/\\\\\\\\\\\______/\\\\\\\\__\/\\\__________    
echo     _\/\\\/////////_____\////////\\\____\////\\\////_____/\\\//////___\/\\\\\\\\\\___
echo      _\/\\\________________/\\\\\\\\\\______\/\\\________/\\\__________\/\\\/////\\\__
echo       _\/\\\_______________/\\\/////\\\______\/\\\_/\\___\//\\\_________\/\\\___\/\\\__
echo        _\/\\\______________\//\\\\\\\\/\\_____\//\\\\\_____\///\\\\\\\\__\/\\\___\/\\\__
echo         _\///________________\////////\//_______\/////________\////////___\///____\///___
echo
PAUSE
