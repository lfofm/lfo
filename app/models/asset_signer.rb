class AssetSigner
  def self.generate_signed_url(params)
    key = params[:key]
    return unless key.present? && key.is_a?(String)
    key = key.encode("UTF-8")

    extension = params[:extension]
    return unless extension.present? && extension.is_a?(String)

    hash = Digest::SHA2.hexdigest(key)

    access_key_id = Rails.application.secrets.aws_access_key_id
    secret_access_key = Rails.application.secrets.aws_secret_access_key
    region = Rails.application.secrets.aws_region
    bucket = Rails.application.secrets.aws_bucket

    client = Aws::S3::Client.new(
      access_key_id: access_key_id,
      secret_access_key: secret_access_key,
      region: region
    )

    key = "tracks/#{hash[0]}/#{hash}.#{extension}"

    signer = Aws::S3::Presigner.new(client: client)
    url = signer.presigned_url(:put_object, bucket: bucket, key: key)

    return {
      key: key,
      url: url
    }
  end
end
