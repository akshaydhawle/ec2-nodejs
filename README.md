# ec2-nodejs

https://github.com/felixyu9/nodejs-express-on-aws-ec2


- create ec2 role for 
    - AmazonEC2RoleforAWSCodeDeploy	

- give name ec2CodeDeployRole    

- create code deploy role 
  - select code deploy
   
 - give name   

 - create instance ec2
 - choose linux
 - add name
 - userdata to commands
 - add iam role to ec2codedeployrole

 - create code deploy application
 - create deployment group

 userdata 

 #!/bin/bash
sudo yum -y update
sudo yum -y install ruby
sudo yum -y install wget
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto



check service userdata:
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Hello from $(hostname -f)</h1>" > /var/www/html/index.html