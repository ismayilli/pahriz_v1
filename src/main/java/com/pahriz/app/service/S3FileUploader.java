package com.pahriz.app.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.pahriz.app.config.AWSConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.InputStream;
import java.net.URL;

@Service
public class S3FileUploader {

    private final AmazonS3 s3client = new AWSConfig().getS3Client();

    public URL upload(InputStream is, String name, String folder) {
        String nameWithFolder = folder+"/"+name;
        s3client.putObject(new PutObjectRequest("pahrizcdn",nameWithFolder,is, new ObjectMetadata()).withCannedAcl(CannedAccessControlList.PublicRead));
        URL url = s3client.getUrl("pahrizcdn",nameWithFolder);
        return url;
    }

}
