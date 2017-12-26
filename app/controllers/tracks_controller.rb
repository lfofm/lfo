class TracksController < ApplicationController
  def generate_signature
    respond_to do |format|
      format.json {
        render json: AssetSigner.generate_signed_url(signature_params)
      }
    end
  end

  private
  def signature_params
    params.require(:file).permit(:key, :extension)
  end
end
