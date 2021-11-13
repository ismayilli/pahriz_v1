package com.pahriz.app.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

public class AWSConfig {

    protected AWSCredentials credentials = new BasicAWSCredentials("AKIAUTBSDRNU73OHMJ5E","vi5zuNtMANy/+XNhSUK78e0AluotCW/7CDQOZ2xz");

    public AmazonS3 getS3Client() {
        AmazonS3 s3client = AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(Regions.EU_CENTRAL_1)
                .build();
        return s3client;
    }

}
